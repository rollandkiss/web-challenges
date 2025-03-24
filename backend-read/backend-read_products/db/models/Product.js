// IMPORTS
import mongoose from "mongoose";

// SCHEMA
const { Schema } = mongoose;

// MODEL OBJECT
const fishShopSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  currency: String,
});

// CONCRETE MODEL
const fishModel =
  mongoose.models.products || mongoose.model("products", fishShopSchema);

// EXPORTS
export default fishModel;
