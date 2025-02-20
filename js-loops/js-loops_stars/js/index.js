console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    // Imperativ geschrieben
    let newImage = document.createElement("img");
    starContainer.append(newImage);

    if (i <= filledStars) {
      newImage.setAttribute("src", "/assets/star-filled.svg");
    } else {
      newImage.setAttribute("src", "/assets/star-empty.svg");
    }
  }
  // --^-- write or modify code above this line --^--
}

renderStars(3);

// new code to create filled stars based on clicks
const anotherContainer = document.createElement("div");
document.body.append(anotherContainer);

for (i = 1; i <= 5; i++) {
  let newImage = document.createElement("img");

  anotherContainer.classList.add("star-container");
  anotherContainer.append(newImage);
  newImage.setAttribute("src", "/assets/star-empty.svg");

  // Event: Click on star
  newImage.addEventListener("click", () => {
    // On "Click" toogle star filled/not-filled
    if (!newImage.classList.contains("star--active")) {
      newImage.setAttribute("src", "/assets/star-filled.svg");
    } else {
      newImage.setAttribute("src", "/assets/star-empty.svg");
    }
    newImage.classList.toggle("star--active");
  });
}
