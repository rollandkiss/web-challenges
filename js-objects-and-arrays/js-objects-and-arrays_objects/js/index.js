console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Rolland",
  age: "44",
  email: "rolland@email.com",
};

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;
// Alternative
// const nameOfAlex = personAlex["name"];
// const ageOfAlex = personAlex["age"];


// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

let personToChange = {
  name: "Kim",
  age: 24,
};

personToChange.name = "Alex";
personToChange.age = 35;

// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
  age: 5,
  breed: "husky",
};


export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
