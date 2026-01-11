"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // 🔥 BEST WAY
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const cron_1 = require("./config/cron");
const env_1 = require("./config/env");
(0, db_1.connectDB)();
// 2. Start Background Tasks
(0, cron_1.startCronJobs)();
// 3. Start Server
app_1.default.listen(env_1.PORT, () => console.log(`Server running on port ${env_1.PORT}`));
