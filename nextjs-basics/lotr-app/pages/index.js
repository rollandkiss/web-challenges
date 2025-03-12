import Link from "next/link";
import { introduction } from "./lib/data.js";

export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href="/volumes" alt="to all volumes">
        <h2>All Volumes</h2>
      </Link>
      <ul>
        <Link href="/volumes/volume1" alt="link to volume1">
          <li>Volume 1: The Fellowship of the Ring</li>
        </Link>
        <Link href="/volumes/volume2" alt="link to volume2">
          <li>Volume 2: The Two Towers</li>
        </Link>
        <Link href="/volumes/volume3" alt="link to volume3">
          <li>Volume 3: The Return of the King</li>
        </Link>
      </ul>
    </div>
  );
}
