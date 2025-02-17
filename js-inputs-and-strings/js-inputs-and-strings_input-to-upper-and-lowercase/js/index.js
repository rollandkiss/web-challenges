console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const downcaseButton = document.querySelector('[data-js="button-downcase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

downcaseButton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});