"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = void 0;
const calculateDiscount = (offer, price, quantity) => {
    switch (offer.type) {
        case "BUY_X_GET_Y":
            const { buyQty, freeQty } = offer.config;
            return Math.floor(quantity / buyQty) * freeQty * price;
        case "PERCENTAGE":
            return (price * quantity * offer.config.discountPercent) / 100;
        case "QUANTITY":
            if (quantity >= offer.config.minQty) {
                return offer.config.flatDiscount;
            }
            return 0;
        default:
            return 0;
    }
};
exports.calculateDiscount = calculateDiscount;
