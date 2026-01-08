// bill.routes.ts
import express from "express";
import { generateBill } from "../controllers/bill.controller";
const router = express.Router();
router.post("/", generateBill);
export default router;
