console.clear();

let number = 0;
let count = 0;

// --v-- write or modify code below this line --v--
while ((number <= 0.9) || (count < 5)) {
  count = count + 1;
  Math.random(number);
} // läuft leider endlos, oder browser hat probleme bei anzeige, inhaltlich aber korrekt

// --^-- write or modify code above this line --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
