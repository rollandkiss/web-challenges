// IMPORTS
// import { products } from "../../../lib/products";
import fishModel from "@/db/models/Product";
import dbConnect from "@/db/connect";

// HANDLER FUNCTION for DATA READ
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const data = await fishModel.find();
    response.status(200).json(data);
    return;
  }

  return response
    .status(405)
    .json({ name: "Error", description: "Request method invalid" });
}
