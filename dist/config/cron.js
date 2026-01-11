"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCronJobs = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const Offer_model_1 = __importDefault(require("../models/Offer.model"));
const startCronJobs = () => {
    node_cron_1.default.schedule("0 5-7 * * *", expireOffers);
    node_cron_1.default.schedule("0 13-15 * * *", expireOffers);
    node_cron_1.default.schedule("0 0-3 * * *", expireOffers);
};
exports.startCronJobs = startCronJobs;
const expireOffers = async () => {
    await Offer_model_1.default.updateMany({ endDate: { $lt: new Date() } }, { isActive: false });
    console.log("Expired offers updated");
};
