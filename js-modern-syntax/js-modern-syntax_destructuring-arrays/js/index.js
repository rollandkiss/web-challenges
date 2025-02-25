console.clear();

/*
EXERCISE 1
Use array destructuring to extract the variables `name`, `price`, and `quantity`.
Make sure to export your variable as shown in the example below to make the tests work.
*/

const item = ["Egg", 0.25, 12];

let [itemName, itemPrice, itemQuantity] = item; // in Eckklammern per Kommata-getrennt zuweisen; Reihenfolge spielt eine Rolle!
console.log(itemName, itemPrice, itemQuantity);

export { itemName, itemPrice, itemQuantity };

// Example: export const [ value1, value2 ] = array;

/*
EXERCISE 2
Use array destructuring to extract the variables `firstNameOfChris`, `lastNameOfChris` and `ageOfChris`.
*/

const personChris = [12, "Chris", "Owen"];

let [ageOfchris, firstNameOfChris, lastNameOfChris] = personChris; // die Reihenfolge spielt eine Rolle
console.log(firstNameOfChris, lastNameOfChris, ageOfchris);

export { firstNameOfChris, lastNameOfChris, ageOfchris };

/*
EXERCISE 3
Use array destructuring to extract the variables `firstNameOfAlex` and `lastNameOfAlex`.
Ensure no unused variables remain.
*/

const personAlex = ["Alex", 12, "Main"];

let [firstNameOfAlex, , lastNameOfAlex] = personAlex; // überspringen von indexwerten einfach per kommata ohen zuweisung einer variablen
console.log(firstNameOfAlex, lastNameOfAlex);

export { firstNameOfAlex, lastNameOfAlex };

/*
EXERCISE 4
Use array destructuring to extract the last name from the array
as variable called `lastName`.
*/

const students = ["Christina", "Jon", "Alexandare"];

let [firstName1, firstName2, ...lastName] = students; // Verwenden des Rest-Operator um als neuen Array abzuspeichern
console.log(lastName);

export { firstName1, firstName2, lastName };

/*
EXERCISE 5
Use array destructuring to extract all names from the nested array `nestedStudents`.
Assign each name to a variable called "student1" through "student5", in the given order.
*/

const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

let [student1, [student2, student3], [student4, student5] = nestedStudents] =
  nestedStudents; // Es können einfach nur Eckklammern verwendet werden oder auch die verschachtelte Zuweisung selbst
console.log(student1, student2, student3, student4, student5);

export { student1, student2, student3, student4, student5 };

/*
EXERCISE 6
Spread the values of the `values` array into the function call of the `add` function.
Keep in mind that you need to export the variable `result` to make the test work.
*/

const values = [1, 6, 7, 9, 12, 5, 4];

const result = add(...values); // Spread values inside this function call

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

console.log(result);

export { result };
