// Imports
import { Navigation } from "./Navigation";
import { Image } from "./Image";

// Header Function
function Header({ className, children }) {
  return (
    <>
      <header className={className}>
        <a href="#">
          <Image className="round-image" src={children.logo} alt="logo"></Image>
        </a>
        <Navigation>{{ navClass: "navigation__link" }}</Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image
            className="round-image"
            src={children.avatar}
            alt="avatar"
          ></Image>
        </button>
      </header>
    </>
  );
}

// Exports
export { Header };
