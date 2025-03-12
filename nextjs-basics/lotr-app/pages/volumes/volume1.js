import Image from "next/image";
const { default: Link } = require("next/link");

export default function Volume1() {
  return (
    <>
      <Link href="/volumes" alt="back to Volumes">
        Back to Volumes
      </Link>
      <h1>the-fellowship-of-the-ring</h1>
      <Image
        src="/../public/images/the-fellowship-of-the-ring.png"
        alt="the fellowhsip of the ring"
        width="140"
        height="230"
      />
    </>
  );
}
