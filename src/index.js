import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

// 1️⃣ CREATE EXPRESS APP  ✔
const app = express();

// 2️⃣ MIDDLEWARE
app.use(express.json());

// 3️⃣ CONNECT DB & START SERVER
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
