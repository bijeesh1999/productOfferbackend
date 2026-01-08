"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBill = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const Bill_model_1 = __importDefault(require("../models/Bill.model"));
const billing_service_1 = require("../services/billing.service");
const generateBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = req.body;
        if (!Array.isArray(items)) {
            res.status(400).json({ message: "Items must be an array" });
            return;
        }
        let finalAmount = 0;
        let totalDiscount = 0;
        const billItems = [];
        for (const item of items) {
            const product = yield product_model_1.default.findById(item._id).populate("offers");
            if (!product) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            const { bestOffer, discount } = (0, billing_service_1.applyBestOffer)(product.offers, product.price, item.qty);
            const price = product.price * item.qty - discount;
            totalDiscount += discount;
            finalAmount += price;
            billItems.push({
                productId: product._id,
                quantity: item.qty,
                appliedOffer: bestOffer === null || bestOffer === void 0 ? void 0 : bestOffer._id,
                discountAmount: discount,
                finalPrice: price,
            });
        }
        const bill = yield Bill_model_1.default.create({
            items: billItems,
            totalDiscount,
            finalAmount,
        });
        res.status(201).json(bill);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to generate bill", error });
    }
});
exports.generateBill = generateBill;
