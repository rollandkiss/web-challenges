import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

// create the article - using fragment as wrapper
function HelloWorldArticle() {
  return (
    <>
      {" "}
      <article>
        <HelloWorldHeader />
        <HelloworldParagraph />
        <HelloworldParagraph />
        <HelloworldParagraph />
      </article>
    </>
  );
}

// create the title - using fragment as wrapper
function HelloWorldHeader() {
  return (
    <>
      {" "}
      <h1>This is my title</h1>
    </>
  );
}

// create the paragraph - using fragment as wrapper
function HelloworldParagraph() {
  return (
    <>
      {" "}
      <p>This is my stupid paragraph</p>
    </>
  );
}
