import "./styles.css";

export default function App() {
  return (
    <>
      <Article />
    </>
  );
}

function Article() {
  return (
    <article className="article">
      {" "}
      <h2 className="article__title">My Article Title</h2>
      <label htmlFor="input">
        Type your name to get a washing machine for free:
      </label>
      <input id="input" placeholder="Type your full name here"></input>
      <AnchorObject />
    </article>
  );
}

function AnchorObject() {
  return (
    <>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Hyperlink"
      >
        my link
      </a>
    </>
  );
}
