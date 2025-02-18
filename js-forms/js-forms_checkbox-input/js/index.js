console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    hideSubmissionMessage();
    return;
  }
  showSubmissionMessage();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});

// New listener to disable/enable the message text
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    return;
  }
  showTosError();
});

// New functions to enable/disable the visibility of the submission DIV
function showSubmissionMessage() {
  successMessage.removeAttribute("hidden");
  successMessage.setAttribute("visible", "");
}

function hideSubmissionMessage() {
  successMessage.removeAttribute("visible");
  successMessage.setAttribute("hidden", "");
}

// Versuch das bei änderung des formulars die message wieder versteckt wird
form.addEventListener("change", () => {
  if (successMessage.attributes === "visible") {
    hideSubmissionMessage();
  }
});