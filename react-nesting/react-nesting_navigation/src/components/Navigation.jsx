// Imports
import { Link } from "./Link";

// Navigation Function
function Navigation({ props, children }) {
  console.log(children);
  return (
    <>
      <nav>
        <Link linkClass={children.navClass} href="#home" text="Home"></Link>
        <Link linkClass={children.navClass} href="#about" text="About"></Link>
        <Link
          linkClass={children.navClass}
          href="#impressum"
          text="Impressum"
        ></Link>
        {/* <a className={children.navClass} href="#home">
          Home
        </a> */}
        {/* <a className={children.navClass} href="#about">
          About
        </a>
        <a className={children.navClass} href="#impressum">
          Impressum
        </a> */}
      </nav>
    </>
  );
}

// Exports
export { Navigation };
