"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// bill.routes.ts
var express_1 = __importDefault(require("express"));
var bill_controller_1 = require("../controllers/bill.controller");
var router = express_1.default.Router();
router.post("/", bill_controller_1.generateBill);
exports.default = router;
