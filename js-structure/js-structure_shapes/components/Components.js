import { getRandomColor } from "../utils/randomColor.js";

function Component(shapeStyle) {
  let shape = document.createElement("div");
  shape.classList.add(shapeStyle);
  shape.addEventListener("click", () => {
    shape.style.backgroundColor = getRandomColor();
  });
  return shape;
}

export { Component };
