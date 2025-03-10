// Imports
import { Navigation } from "./Navigation";

// Header Function
function Header({ className, children }) {
  return (
    <>
      <header className={className}>
        <a href="#">
          <img className="round-image" src={children.logo} alt="logo" />
        </a>
        <Navigation>{{ navClass: "navigation__link" }}</Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={children.avatar} alt="avatar" />
        </button>
      </header>
    </>
  );
}

// Exports
export { Header };
