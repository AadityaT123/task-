import express from "express";
import Project from "../models/Project.js";
import upload from "../middleware/multer.js";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

// 🔥 CONFIGURE CLOUDINARY HERE (GUARANTEED)
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

    const project = await Project.create({
      image: result.secure_url,
      name: req.body.name,
      description: req.body.description,
    });

    res.status(201).json(project);
  } catch (err) {
    console.error("CLOUDINARY ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

export default router;
