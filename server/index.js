import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
console.log("CLOUDINARY_URL =", process.env.CLOUDINARY_URL);


import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import projectRoutes from "./routes/project.routes.js";
import clientRoutes from "./routes/client.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import subscriberRoutes from "./routes/subscriber.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// Start server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${process.env.PORT || 4000}`);
});
