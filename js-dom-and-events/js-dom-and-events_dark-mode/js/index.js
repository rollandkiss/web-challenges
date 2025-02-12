console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

document.querySelector('[data-js="dark-mode-button"]').addEventListener("click", () => {
    bodyElement.classList.add("dark");
    console.dir(bodyElement.classList);
});

document.querySelector('[data-js="light-mode-button"]').addEventListener("click", () => {
    bodyElement.classList.remove("dark");
    console.dir(bodyElement.classList);
});

document.querySelector('[data-js="toggle-button"]').addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
    console.dir(bodyElement.classList);
});
