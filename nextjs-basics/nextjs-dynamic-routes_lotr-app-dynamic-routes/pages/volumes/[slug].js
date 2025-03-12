import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image.js";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";

function DynamicRoute() {
  let router = useRouter();
  let { slug } = router.query;
  // console.log(slug);

  let result = volumes.find((volume) => {
    return volume.slug === slug;
  });

  console.log(result);

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <p>Test</p>
    </>
  );
}

// Export
export default DynamicRoute; // "export default" wird erwartet
