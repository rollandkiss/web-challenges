import "./Greeting.css";

function Greeting({ name }) {
  let greetName = name;
  if (greetName === "Felix") {
    greetName = "Coach";
  }

  return <h1>Hello, {greetName}</h1>;
}

export { Greeting };
