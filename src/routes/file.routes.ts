// bill.routes.ts
import express from "express";
import { generateUrl } from "../controllers/fileUpload.controller";
import { upload } from "../middleware/multer";

const router = express.Router();
router.post("/", upload.single("image"),generateUrl);

export default router;
