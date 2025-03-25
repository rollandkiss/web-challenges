import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

// SCHEMA
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

// MODEL
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
