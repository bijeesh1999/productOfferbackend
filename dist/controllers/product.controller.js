"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const createProduct = async (req, res) => {
    try {
        const product = await product_model_1.default.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create product",
            error
        });
    }
};
exports.createProduct = createProduct;
const getProducts = async (_req, res) => {
    try {
        const products = await product_model_1.default.find().populate("offers");
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error
        });
    }
};
exports.getProducts = getProducts;
