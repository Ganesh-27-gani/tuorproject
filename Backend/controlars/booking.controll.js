import Booking from "../models/booking.model.js";


//http://localhost:3000/api/v1/booking/

export const createBooking = async (req, res) => {
  const { tourId, fullName, phone, date, guests, totalAmount } = req.body;

  try {
    const newBooking = new Booking({
      tourId,
      userId: req.user.id,  // Extracted from token
      fullName,
      phone,
      date,
      guests,
      totalAmount
    });

    await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Tour booked successfully",
      data: newBooking
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Booking failed",
      error: err.message
    });
  }
};

//http://localhost:3000/api/v1/booking/allbooking


 

export const getAllBookings = async (req, res) => {
  try {
    console.log("Fetching all bookings...");

    const bookings = await Booking.find().populate("tourId userId");

    console.log("Bookings:", bookings);

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (err) {
     res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: err.message
    });
  }
};


//http://localhost:3000/api/v1/booking/user/:userid

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate("tourId");
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch user bookings" });
  }
};

//http://localhost:3000/api/v1/booking/:id

export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Booking canceled successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete booking" });
  }
};