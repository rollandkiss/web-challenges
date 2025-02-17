console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  // box.style.backgroundColor = `hsl(${inputColor.value}deg, 50%, 50%)`;
  box.style.setProperty("--hue", inputColor.value); // inline styling über css variable definieren die in root oder in selektor definiert wurde im css
});

inputRadius.addEventListener("input", () => {
  box.style.setProperty("--radius", inputRadius.value);
});

inputRotation.addEventListener("input", () => {
  // box.style.setProperty("--rotation", inputRotation.value);
  box.style.transform.rotate = transform(rotate(`${inputRotation.value}deg`));
});
