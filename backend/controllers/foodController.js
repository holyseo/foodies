import foodModel from "../models/foodModel.js";
import { Readable } from "stream";
import cloudinary from "cloudinary";

const addFood = async (req, res) => {
  // let image_filename = `${req.file.filename}`;
  // console.log(req.file);

  const stream = Readable.from(req.file.buffer);
  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.pipe(uploadStream);
  });

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    // image: image_filename,
    image: result.secure_url,
    cloudinary_id: result.public_id,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food successfully added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
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
