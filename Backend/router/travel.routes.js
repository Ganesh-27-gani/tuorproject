import express from "express"
import { createTour, deleteTour, getAllTours, getFeaturedTours, getTourById, updateTour } from "../controlars/travel.control.js";

const router = express.Router()


router.post("/createtuor", createTour);
router.get("/getfeaturedtuor", getFeaturedTours)
router.get('/', getAllTours)
router.get("/:id", getTourById);
router.put("/:id", updateTour)
router.delete("/:id", deleteTour);

export default router