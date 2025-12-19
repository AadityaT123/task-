import { v2 as cloudinary } from "cloudinary";

// reads CLOUDINARY_URL automatically
cloudinary.config();

export default cloudinary;
