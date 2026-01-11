"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOffer = exports.createOffer = void 0;
const Offer_model_1 = __importDefault(require("../models/Offer.model"));
const createOffer = async (req, res) => {
    const offer = await Offer_model_1.default.create(req.body);
    res.json(offer);
};
exports.createOffer = createOffer;
const findAllOffer = async (req, res) => {
    const offer = await Offer_model_1.default.find({ isActive: true });
    res.json(offer);
};
exports.findAllOffer = findAllOffer;
