"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const expireOffers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Offer_model_1.default.updateMany({ endDate: { $lt: new Date() } }, { isActive: false });
    console.log("Expired offers updated");
});
