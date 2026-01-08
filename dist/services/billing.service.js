"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBestOffer = void 0;
var offerEngine_service_1 = require("./offerEngine.service");
var applyBestOffer = function (offers, price, quantity) {
    var bestOffer = null;
    var maxDiscount = 0;
    for (var _i = 0, offers_1 = offers; _i < offers_1.length; _i++) {
        var offer = offers_1[_i];
        var discount = (0, offerEngine_service_1.calculateDiscount)(offer, price, quantity);
        if (discount > maxDiscount) {
            maxDiscount = discount;
            bestOffer = offer;
        }
    }
    return { bestOffer: bestOffer, discount: maxDiscount };
};
exports.applyBestOffer = applyBestOffer;
