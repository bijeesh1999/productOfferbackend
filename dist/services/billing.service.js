"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBestOffer = void 0;
const offerEngine_service_1 = require("./offerEngine.service");
const applyBestOffer = (offers, price, quantity) => {
    let bestOffer = null;
    let maxDiscount = 0;
    for (const offer of offers) {
        const discount = (0, offerEngine_service_1.calculateDiscount)(offer, price, quantity);
        if (discount > maxDiscount) {
            maxDiscount = discount;
            bestOffer = offer;
        }
    }
    return { bestOffer, discount: maxDiscount };
};
exports.applyBestOffer = applyBestOffer;
