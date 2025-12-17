import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./router/auth.routers.js";
import travelRouter from "./router/travel.routes.js";
import bookingRouter from "./router/bookingRouter.js";
import userRouter from "./router/userRouter.js";
import cors from "cors";

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(express.json());

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/travel", travelRouter)
app.use("/api/v1/booking", bookingRouter)
app.use("/api/v1/user", userRouter)


const connectDB = async() =>{
 try{
  await mongoose.connect(process.env.MONGO_URI)
console.log("MongoDB Connected");
 }catch(err){
  console.log("DB Connection Error:", err)
 }
}

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ success: false, message: err.message });
});


connectDB().then(()=>{
  app.listen(port, () => {
  console.log(`DB Connected ${port}`);
})
})
