// ROUTE: > API > PRODUCTS (server only)
//
// IMPORTS
import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  response.status(200).json(getAllProducts());
}
