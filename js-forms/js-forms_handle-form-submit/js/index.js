console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // verhindert das die standardausführung der form submission und neuladens des HTML durchgeführt wird durch nutzen der methode "preventDefault"

  const targetForm = event.target; // DOM des data-js="form" - REACT schreibweise durch benutzen des "event.target"

  const formElement = new FormData(targetForm); // Spezielle Funktionsklasse "FormData" als neues objekt des event.target FORMULARs : Rückgabe in JSON als Klasse
  const data = Object.fromEntries(formElement); // "data" als objekt mit der methode "formEntries" des zuvor neu kreierten objekts um die werte zu erhalten

  const ageBadnessSum = Number(data.age) + Number(data.badness) // transformation der strings in nummern um kalkulationen durchzuführen
  console.log(typeof formElement, data, ageBadnessSum);
});
