"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// product.routes.ts
var express_1 = __importDefault(require("express"));
var product_controller_1 = require("../controllers/product.controller");
var router = express_1.default.Router();
router.post("/", product_controller_1.createProduct);
router.get("/", product_controller_1.getProducts);
exports.default = router;
