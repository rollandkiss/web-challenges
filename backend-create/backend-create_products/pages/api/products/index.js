import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  // DB Connection
  await dbConnect();

  // Handle GET requests
  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  // Handle POST requests
  if (request.method === "POST") {
    const productData = request.body;

    await Product.create(productData);
    response.status(201).json({ status: "Successfully created" });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
