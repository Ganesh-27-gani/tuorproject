import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getFeaturedTours,
  getTourById,
  updateTour
} from "../controlars/travel.control.js";

const router = express.Router();

router.post("/", createTour);
router.get("/", getAllTours);
router.get("/featured", getFeaturedTours);
router.get("/:id", getTourById);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);

export default router;
