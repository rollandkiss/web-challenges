// ROUTE: > PRODUCTS (frontend)
//
// IMPORTS
import useSWR from "swr";
// import { useRouter } from "next/router";

// FETCHER
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// FUNCTION: provide all listings
export default function AllListings() {
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  // Handle Error and Loading
  if (error) return <div>failed to load data</div>;
  if (isLoading) return <div>loading...</div>;

  // Render Data Output
  return (
    <>
      <p>Welcome on my Products Page</p>
      {data.map((element) => {
        return <p key={element.id}>Product name: {element.name}</p>;
      })}
    </>
  );
}

{
  /* id: "1",
name: "Shrimp",
description: "Prefers to live in pairs",
price: 19,
currency: "€",
category: "Invertebrates", */
}
