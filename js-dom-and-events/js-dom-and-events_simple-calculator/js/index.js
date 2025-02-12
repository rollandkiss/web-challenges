console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
let buttonAdd = document.querySelector('[data-js="add"]');
let buttonSubtract = document.querySelector('[data-js="subtract"]');
let buttonMultiply = document.querySelector('[data-js="multiply"]');
let buttonDivide = document.querySelector('[data-js="divide"]');
let buttonExponent = document.querySelector('[data-js="exponent"]');
let buttonModulo = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
buttonAdd.addEventListener("click", () => {
    let addResult = operand1 + operand2;
    console.log("Add", operand2, "to", operand1, "with result of", addResult);
});
buttonSubtract.addEventListener("click", () => {
    let substractResult = operand1 - operand2;
    console.log("Substract", operand2, "from", operand1, "with result of", substractResult);
});
buttonMultiply.addEventListener("click", () => {
    let multiplyResult = operand1 * operand2;
    console.log("Multiply", operand1, "with", operand2, "with result of", multiplyResult);
});
buttonDivide.addEventListener("click", () => {
    let divideResult = operand1 / operand2;
    console.log("Divide", operand1, "by", operand2, "with result of", divideResult);
});
buttonExponent.addEventListener("click", () => {
    let exponentResult = operand1 ** operand2;
    console.log("Expose", operand1, "by", operand2, "with result of", exponentResult);
});
buttonModulo.addEventListener("click", () => {
    let modResult = operand1 % operand2;
    console.log("Rest of", operand1, "with modulus", operand2, "with result of", modResult);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
let buttonIncByOne = document.querySelector('[data-js="increase-by-one"]');
buttonIncByOne.addEventListener("click", () => {
    operand1 = operand1 + 1;
    console.log("Updated the Operand One (increased by 1):", operand1);
});

let buttonIncByFive = document.querySelector('[data-js="increase-by-five"]');
buttonIncByFive.addEventListener("click", () => {
    operand1 = operand1 + 5;
    console.log("Updated the Operand One (increased by 5):", operand1);
})

let buttonDecByOne = document.querySelector('[data-js="decrease-by-one"]');
buttonDecByOne.addEventListener("click", () => {
    operand1 = operand1 - 1;
    console.log("Updated the Operand One (decreased by 1):", operand1);
})

let buttonDecByFive = document.querySelector('[data-js="decrease-by-five"]');
buttonDecByFive.addEventListener("click", () => {
    operand1 = operand1 - 5;
    console.log("Updated the Operand One (decreased by 5):", operand1);
})

let buttonMultiplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
buttonMultiplyByTwo.addEventListener("click", () => {
    operand1 = operand1 * 2;
    console.log("Updated the Operand One (multiplied by 2):", operand1);
})

let buttonDivideByTwo = document.querySelector('[data-js="divide-by-two"]');
buttonDivideByTwo.addEventListener("click", () => {
    operand1 = operand1 / 2;
    console.log("Updated the Operand One (divided by 2):", operand1);
})
// --^-- write your code here --^--
