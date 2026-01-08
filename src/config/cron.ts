import cron from "node-cron";
import Offer from "../models/Offer.model";

export const startCronJobs = () => {
  cron.schedule("0 5-7 * * *", expireOffers);
  cron.schedule("0 13-15 * * *", expireOffers);
  cron.schedule("0 0-3 * * *", expireOffers);
};

const expireOffers = async () => {
  await Offer.updateMany(
    { endDate: { $lt: new Date() } },
    { isActive: false }
  );
  console.log("Expired offers updated");
};
