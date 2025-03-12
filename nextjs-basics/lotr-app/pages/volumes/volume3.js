import Image from "next/image";
const { default: Link } = require("next/link");

export default function Volume3() {
  return (
    <>
      <Link href="/volumes" alt="back to Volumes">
        Back to Volumes
      </Link>
      <h1>the-return-of-the-king</h1>
      <Image
        src="/../public/images/the-return-of-the-king.png"
        alt="the return of the king"
        width="140"
        height="230"
      />
    </>
  );
}
