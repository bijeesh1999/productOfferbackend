"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors")); // 1. Import CORS here
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var offer_routes_1 = __importDefault(require("./routes/offer.routes"));
var bill_routes_1 = __importDefault(require("./routes/bill.routes"));
var corsOptions = {
    // Replace this with your actual Vercel URL
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
var app = (0, express_1.default)();
// 2. Apply CORS immediately after initializing app
app.use((0, cors_1.default)(corsOptions));
// 3. Body parser
app.use(express_1.default.json());
// 4. Routes (Must come AFTER cors)
app.use("/api/products", product_routes_1.default);
app.use("/api/offers", offer_routes_1.default);
app.use("/api/bill", bill_routes_1.default);
exports.default = app;
