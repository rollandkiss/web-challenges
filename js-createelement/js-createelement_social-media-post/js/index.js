console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newArticle = document.createElement("article");
const newParagraph = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

// New Element via DOM and createElement
document.body.append(newArticle);
newArticle.classList = "post";

newArticle.append(newParagraph);
newParagraph.classList.add("post__content"); // übergabe des wertes mittels add-methode
newParagraph.textContent = "Hokus Pokus Fidibus , drei mal schwarzer Kater";

newArticle.append(newFooter);
newFooter.classList = "post__footer";

newFooter.append(newSpan);
newSpan.classList = "post__username";
newSpan.textContent = "die grüne Hexe";

newFooter.append(newButton);
newButton.setAttribute("classList", "post__button BLABLA"); // mehrer werte übergeben
newButton.type = "button";
newButton.setAttribute("data-js", "like-button"); // zuweisung des "data-js"
newButton.textContent = "♥ Like";
newButton.addEventListener("click", handleLikeButtonClick); // event listener dem neuen button zuweisen
