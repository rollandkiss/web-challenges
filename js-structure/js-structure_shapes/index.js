console.clear();
// Imports included
import { Component } from "./components/Components.js";

const root = document.getElementById("root");

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = "#ccc";
// });

// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   square.style.backgroundColor = "#ccc";
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = "#ccc";
// });

root.append(Component("circle"), Component("square"), Component("pentagon"));

// root.append(circle, square, pentagon);
