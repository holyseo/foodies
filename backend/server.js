import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
<<<<<<< HEAD
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
=======
// import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

>>>>>>> origin/main
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

<<<<<<< HEAD
app.use("/api/food", foodRouter);
// app.use("/images", express.static("uploads"));
=======
// app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
>>>>>>> origin/main
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}🚀🚀`)
);
