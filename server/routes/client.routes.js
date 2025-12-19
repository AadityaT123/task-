import express from "express";
import Client from "../models/Client.js";
import upload from "../middleware/multer.js";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

// CONFIGURE CLOUDINARY INLINE (since this works)
cloudinary.config({
  cloud_name: "dokpmwkli",
  api_key: "474129198656589",
  api_secret: "42EPDsk33Ay5xePLqh1Jo8YQp5k",
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const client = await Client.create({
      image: result.secure_url,
      name: req.body.name,
      description: req.body.description,
      designation: req.body.designation,
    });

    res.status(201).json(client);
  } catch (err) {
    console.error("CLIENT ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

export default router;
