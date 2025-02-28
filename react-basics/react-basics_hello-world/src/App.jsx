import "./styles.css";

export default function App() {
  return <HelloWorld />; // function call with self-closing tag as pseudo-HTML, here: jsx formating
}

function HelloWorld() {
  return (
    <>
      <h1 className="header">Hello World!</h1>
    </>
  );
}
