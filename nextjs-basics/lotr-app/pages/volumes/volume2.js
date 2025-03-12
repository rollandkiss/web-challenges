import Image from "next/image";
const { default: Link } = require("next/link");

export default function Volume2() {
  return (
    <>
      <Link href="/volumes" alt="back to Volumes">
        Back to Volumes
      </Link>
      <h1>the-two-towers</h1>
      <Image
        src="/../public/images/the-two-towers.png"
        alt="the two towers"
        width="140"
        height="230"
      />
    </>
  );
}
