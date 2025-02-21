const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((color) => {
  const newDiv = document.createElement("div");
  document.body.append(newDiv);

  newDiv.setAttribute("class", "color-box");
  // newDiv.style.backgroundColor = color;  // mit styles ist der standard um inline styles zu setzen
  newDiv.setAttribute("style", `background-color: ${color}`); // setAttribute muss das style attribut mit entsprechendem key-value pair gesetzt werden
});

function renderColorBox(color) {
  // Deklaration der Variable - HTML Element erstellen
  const newDiv = document.createElement("div");

  // Erstelltes Element positionieren
  document.body.append(newDiv);

  // Attribute setzen
  newDiv.setAttribute("class", "color-box");
  newDiv.setAttribute("style", `background-color: ${color}`);
}

colors.forEach(renderColorBox); // mit function reference ausführen - forEach
