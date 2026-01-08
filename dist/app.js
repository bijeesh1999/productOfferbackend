"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // 1. Import CORS here
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const offer_routes_1 = __importDefault(require("./routes/offer.routes"));
const bill_routes_1 = __importDefault(require("./routes/bill.routes"));
const app = (0, express_1.default)();
// 2. Apply CORS immediately after initializing app
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // Be explicit about your frontend URL
    credentials: true
}));
// 3. Body parser
app.use(express_1.default.json());
// 4. Routes (Must come AFTER cors)
app.use("/api/products", product_routes_1.default);
app.use("/api/offers", offer_routes_1.default);
app.use("/api/bill", bill_routes_1.default);
exports.default = app;
