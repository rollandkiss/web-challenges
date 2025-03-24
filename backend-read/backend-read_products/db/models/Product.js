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
  mongoose.models.products || mongoose.model("products", fishShopSchema); // Mongoose erwartet singular definierte colletcions, hier: products > Product // beides geht

// EXPORTS
export default fishModel;
