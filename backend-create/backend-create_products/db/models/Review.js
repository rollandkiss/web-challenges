import mongoose from "mongoose";

const { Schema } = mongoose;

// SCHEMA
const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

// MODEL
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
