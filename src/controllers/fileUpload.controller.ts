// controllers/upload.controller.ts
import * as Express from "express";
import streamifier from "streamifier";
import cloudinary from "../config/fileUp";

export const generateUrl = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File required" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "my-project",
        resource_type: "auto", // images, videos, pdf, etc.
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }

        res.status(201).json({
          message: "Upload successful",
          fileUrl: result?.secure_url, // 🔥 THIS IS YOUR IMAGE URL
          publicId: result?.public_id,
        });
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
