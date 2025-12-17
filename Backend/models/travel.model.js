import mongoose from "mongoose"

const travelSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   location: String,
   country: String,
   price: Number,
   rating: Number,
   reviews: Number,
    imageId: String,
   distance: {
      type: String,
   },
   people: String,
   description: {
      type: String,
      reuired: true
   },
  isFeatured: {
  type: Boolean,
  required: true
}

})
export default mongoose.model("Travel", travelSchema)