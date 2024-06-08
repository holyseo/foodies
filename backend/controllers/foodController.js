import foodModel from "../models/foodModel.js";
import { Readable } from "stream";
import cloudinary from "cloudinary";
const addFood = async (req, res) => {
  try {
    const stream = Readable.from(req.file.buffer);
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        (error, result) => {
          if (error) {
            reject(error); // Reject with the error object
          } else {
            resolve(result); // Resolve with the upload result
          }
        }
      );
      stream.pipe(uploadStream);
    });

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: result.secure_url,
      cloudinary_id: result.public_id,
      category: req.body.category,
    });

    // Save the food item to the database
    await food.save();

    res.json({ success: true, message: "Food successfully added" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFood = async (req, res) => {
  try {
    // const food = await foodModel.findById(req.body.id);
    // fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
