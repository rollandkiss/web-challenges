console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const title = "My Titel";
const textContent = "My awesome Text";
let numLikes = 17;
const creator = "Rolland Kiss"
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(textContent);
console.log(numLikes);
console.log(creator);
console.log(isReported);

numLikes = numLikes + 1;
console.log("Updated Likes:", numLikes);
// --^-- write your code here --^--
