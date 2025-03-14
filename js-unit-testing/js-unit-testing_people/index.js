export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });
}

export function getNameAndAge(people) {
  return people.map((person) => {
    return `${person.lastName} (${person.age})`;
  });
}

export function getPeopleByAge(people, age) {
  const selectedPerson = people.find((person) => person.age === age);

  // console.log(selectedPerson[0]["firstName"]); // es wird ein array der länge 1 zurückgegeben bei filter, find liefert ein objekt zurück
  return `${selectedPerson["firstName"]} ${selectedPerson["lastName"]}`;
}

export function getPeopleNamesOlderThan(people, age) {
  const selectedPersons = people.filter((person) => {
    return person.age >= age;
  });
  // console.log(selectedPersons);
  const resultPersons = selectedPersons.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });
  //console.log(resultPersons);
  return resultPersons;
}

export function getPeopleByLastName(people, lastName) {
  const selectedPersons = people.filter((person) => {
    return person.lastName === lastName;
  });
  // console.log(selectedPersons);
  const resultPersons = selectedPersons.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });
  // console.log(resultPersons);
  return resultPersons;
}

export function findPersonById(people, id) {
  const selectedPerson = people.find((person) => {
    return person.id === id;
  });
  // console.log(selectedPerson);
  return selectedPerson;
}

export function isAnyoneOlderThan(people, age) {
  const selectedPersons = people.some((person) => {
    return person.age > age;
  });
  return selectedPersons;
}

export function getLastNamesSortedByAge(people) {
  // const sortedPersons = people.toSorted((a, b) => {
  //   return a.age - b.age;
  // });

  // const sortedLastNames = sortedPersons.map((person) => {
  //   return person.lastName;
  // });

  // return sortedLastNames;

  // Solution by using method-chaining for array-operations
  return people
    .toSorted((a, b) => a.age - b.age)
    .map((person) => person.lastName);
}
