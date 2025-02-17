console.clear();

let inputField = document.querySelector('[data-js="first-input"]');
const buttonUpper = document.querySelector('[data-js="button-uppercase"]');

buttonUpper.addEventListener("click", () => {
  inputField.value = inputField.value.toUpperCase();
});
