import express from "express";
import {
  createBooking,
  getAllBookings,
  getUserBookings,
  deleteBooking
} from "../controlars/booking.controll.js";
import { protect } from "../auth/verifyToken.js";
 
const router = express.Router();
router.post("/", protect, createBooking);
router.get("/", protect, getAllBookings);
router.get("/user/:userId", protect, getUserBookings);
router.delete("/:id", protect, deleteBooking);

export default router;
