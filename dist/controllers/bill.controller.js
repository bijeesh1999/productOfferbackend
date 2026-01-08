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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBill = void 0;
var product_model_1 = __importDefault(require("../models/product.model"));
var Bill_model_1 = __importDefault(require("../models/Bill.model"));
var billing_service_1 = require("../services/billing.service");
var generateBill = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var items, finalAmount, totalDiscount, billItems, _i, items_1, item, product, _a, bestOffer, discount, price, bill, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                items = req.body;
                if (!Array.isArray(items)) {
                    res.status(400).json({ message: "Items must be an array" });
                    return [2 /*return*/];
                }
                finalAmount = 0;
                totalDiscount = 0;
                billItems = [];
                _i = 0, items_1 = items;
                _b.label = 1;
            case 1:
                if (!(_i < items_1.length)) return [3 /*break*/, 4];
                item = items_1[_i];
                return [4 /*yield*/, product_model_1.default.findById(item._id).populate("offers")];
            case 2:
                product = _b.sent();
                if (!product) {
                    res.status(404).json({ message: "Product not found" });
                    return [2 /*return*/];
                }
                _a = (0, billing_service_1.applyBestOffer)(product.offers, product.price, item.qty), bestOffer = _a.bestOffer, discount = _a.discount;
                price = product.price * item.qty - discount;
                totalDiscount += discount;
                finalAmount += price;
                billItems.push({
                    productId: product._id,
                    quantity: item.qty,
                    appliedOffer: bestOffer === null || bestOffer === void 0 ? void 0 : bestOffer._id,
                    discountAmount: discount,
                    finalPrice: price,
                });
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, Bill_model_1.default.create({
                    items: billItems,
                    totalDiscount: totalDiscount,
                    finalAmount: finalAmount,
                })];
            case 5:
                bill = _b.sent();
                res.status(201).json(bill);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                res.status(500).json({ message: "Failed to generate bill", error: error_1 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.generateBill = generateBill;
