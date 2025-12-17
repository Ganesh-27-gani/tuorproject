import User from "../models/auth.model.js"
import Travel from "../models/travel.model.js"



//http://localhost:3000/api/v1/travel/featured


export const createTour = async (req, res) => {
  try {
    const tour = new Travel(req.body);
    await tour.save();
    return res.status(200).json({
      success: true,
      message: "Tour created successfully",
      data: tour
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to create tour",
      error: err.message
    });
  }
};

//http://localhost:3000/api/v1/travel/getfeaturedtuor
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Travel.find({ isFeatured: true });
    res.status(200).json({ success: true, message: "Featured tours", data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal error", error: err.message });
  }
};

//http://localhost:3000/api/v1/travel/getalltuors
export const getAllTours = async (req, res) => {
  try {
    const tours = await Travel.find();
    res.status(200).json({
      success: true,
      message: "All tours fetched successfully",
      data: tours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tours",
      error: err.message
    });
  }
};

//http://localhost:3000/api/v1/travel/_id

export const getTourById = async (req, res) => {
  try {
    const tour = await Travel.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }
    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//http://localhost:3000/api/v1/travel/_:id
export const updateTour = async (req, res) => {
  try {
    const updated = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Tour not found" });

    res.status(200).json({ success: true, message: "Tour updated", data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: "Update failed", error: err.message });
  }
};

//http://localhost:3000/api/v1/travel/_:id

export const deleteTour = async (req, res) => {
  try {
    const deleted = await Travel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }

    res.status(200).json({ success: true, message: "Tour deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Delete failed", error: err.message });
  }
};


// //http://localhost:3000/api/v1/travel/createtravel
// export const createTravel = async(req, res, next) => {
//   const {title, city, address, distance, maxGroupSize, desc, reviews}  = req.body
//   const userId = req.userId

//   try{
//     const user = await User.findById(userId)
//     const blog = new Travel({
//       title,
//       city,
//       address,
//       distance,
//       maxGroupSize,
//       desc,
//       reviews,

//     })
//     await blog.save()
//     return res.status(200).json({success:true, message:"Blog Created Successfully"})

//   }catch(err){
//     return res.status(500).json({success:false, message:"Internal Server Issue"})
//   }

// }