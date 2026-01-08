"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// offer.routes.ts
var express_1 = __importDefault(require("express"));
var offer_controller_1 = require("../controllers/offer.controller");
var router = express_1.default.Router();
router.post("/", offer_controller_1.createOffer);
router.get("/", offer_controller_1.findAllOffer);
exports.default = router;
