// DYNAMIC ROUTE: > PRODUCTS > [id] (frontend)
//
// IMPORTS
import useSWR from "swr";
import { useRouter } from "next/router";

// FETCHER
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// FUNCTION: provide selected product by ID
export default function DetailsPage() {
  const router = useRouter();
  const { id: IdRoute } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/products/${IdRoute}`,
    fetcher
  );

  // Handle Error and Loading
  if (error) return <div>failed to load data</div>;
  if (isLoading) return <div>loading...</div>;

  // Render Data Output
  return (
    <>
      <p>Welcome on my Single Products Page</p>
      <p>Product name: {data.name}</p>
    </>
  );
}
