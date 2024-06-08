import express from "express";
import multer from "multer";
<<<<<<< HEAD
import cloudinary from "cloudinary";
=======
>>>>>>> origin/main
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

<<<<<<< HEAD
cloudinary.v2.config({
  cloud_name: "dauqaayos",
  api_key: "234645116783126",
  api_secret: "ElnkVU7wUVRdyVnwVCjPoq-uU3Y",
});

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });

const storage = multer.memoryStorage();

=======
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

>>>>>>> origin/main
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
