"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// bill.routes.ts
const express_1 = __importDefault(require("express"));
const fileUpload_controller_1 = require("../controllers/fileUpload.controller");
const multer_1 = require("../middleware/multer");
const router = express_1.default.Router();
router.post("/", multer_1.upload.single("image"), fileUpload_controller_1.generateUrl);
exports.default = router;
