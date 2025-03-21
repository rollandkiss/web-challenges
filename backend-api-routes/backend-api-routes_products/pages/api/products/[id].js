// DYNAMIC ROUTE: > API > PRODUCTS > [id] (server only)
//
// IMPORTS
import { getProductById } from "@/services/productServices";

// FUNCTION: handle requests
export default function handler(request, response) {
  const { id } = request.query;

  // Dirty Rest
  if (!getProductById(id)) {
    response.status(404).json({ name: "error-message: product not found" });
    return;
  }

  // Happy Path
  response.status(200).json(getProductById(id));
  return;
}
