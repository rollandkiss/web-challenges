console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  let newMessage = document.createElement("li");
  // toastContainer.append(newMessage); // placing the element as lastChild
  // toastContainer.lastChild.textContent = "I'm a Toaster Message -appended" // lastChild is the position of the newly created element

  toastContainer.prepend(newMessage); // placing the element as firstChild
  toastContainer.firstChild.textContent = "I'm a Toaster Message -prepended" // firstChild is the position of the newly created element
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
