import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Nummer 5 lebt!</Button>
      <Button>Meine Eier explodieren</Button>
      <Button>Ich habe einen Bart</Button>
      <Button>Deine Mudda</Button>
    </main>
  );
}

function Button({ props, children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
