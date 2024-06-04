import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://holyseo:bIUK1WnMSjeFWm6o@cluster0.v5dbscu.mongodb.net/foodie"
    )
    .then(() => console.log("DB connected🔗🔗"));
};
