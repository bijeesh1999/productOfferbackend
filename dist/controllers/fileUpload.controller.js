"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUrl = void 0;
const streamifier_1 = __importDefault(require("streamifier"));
const fileUp_1 = __importDefault(require("../config/fileUp"));
const generateUrl = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File required" });
        }
        const uploadStream = fileUp_1.default.uploader.upload_stream({
            folder: "my-project",
            resource_type: "auto", // images, videos, pdf, etc.
        }, (error, result) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({
                message: "Upload successful",
                fileUrl: result === null || result === void 0 ? void 0 : result.secure_url, // 🔥 THIS IS YOUR IMAGE URL
                publicId: result === null || result === void 0 ? void 0 : result.public_id,
            });
        });
        streamifier_1.default.createReadStream(req.file.buffer).pipe(uploadStream);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.generateUrl = generateUrl;
