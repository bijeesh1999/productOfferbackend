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
// 1. Connect to Database
(0, db_1.connectDB)();
// 2. Start Background Tasks
(0, cron_1.startCronJobs)();
// 3. Start Server
app_1.default.listen(env_1.PORT, function () { return console.log("Server running on port ".concat(env_1.PORT)); });
