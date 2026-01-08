// offer.routes.ts
import express from "express";
import { createOffer, findAllOffer } from "../controllers/offer.controller";
const router = express.Router();
router.post("/", createOffer);
router.get("/", findAllOffer);

export default router;
