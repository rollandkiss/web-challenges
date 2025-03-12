const { default: Link } = require("next/link");
import { introduction } from "../lib/data";

export default function Volumes() {
  return (
    <>
      <Link href="/" alt="back to homepage">
        Back to Homepage
      </Link>
      <h1>The Lord of the Rings - All Volumes</h1>
      <Link href="/volumes/volume1" alt="to volume1">
        The Fellowship of the Ring
      </Link><p></p>
      <Link href="/volumes/volume2" alt="to volume2">
        The Two Towers
      </Link><p></p>
      <Link href="/volumes/volume3" alt="to volume3">
        The Return of the King
      </Link>
    </>
  );
}
