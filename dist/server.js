"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var db_1 = require("./config/db");
var cron_1 = require("./config/cron");
var env_1 = require("./config/env");
var cors_1 = __importDefault(require("cors"));
var corsOptions = {
    // Replace this with your actual Vercel URL
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
// 0. Apply CORS Middleware
// (Important: Must be applied before routes are defined in 'app')
app_1.default.use((0, cors_1.default)(corsOptions));
// 1. Connect to Database
(0, db_1.connectDB)();
// 2. Start Background Tasks
(0, cron_1.startCronJobs)();
// 3. Start Server
app_1.default.listen(env_1.PORT, function () { return console.log("Server running on port ".concat(env_1.PORT)); });
