"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const cron_1 = require("./config/cron");
const env_1 = require("./config/env");
const cors_1 = __importDefault(require("cors"));
// 0. Apply CORS Middleware
// (Important: Must be applied before routes are defined in 'app')
app_1.default.use((0, cors_1.default)());
// 1. Connect to Database
(0, db_1.connectDB)();
// 2. Start Background Tasks
(0, cron_1.startCronJobs)();
// 3. Start Server
app_1.default.listen(env_1.PORT, () => console.log(`Server running on port ${env_1.PORT}`));
