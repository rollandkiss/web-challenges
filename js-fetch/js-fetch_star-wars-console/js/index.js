console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  console.log(data.results);
  
  // Eye color of R2-D2 > object:results > array: id=2 > object:eye_color
  console.log(data.results[2]["eye_color"]);
}

fetchData(url);
