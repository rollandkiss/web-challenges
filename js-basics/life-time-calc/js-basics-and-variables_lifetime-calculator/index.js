console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

let totalNumbersDays = currentAge * 365;
const lifeSpanYears = 80;
const lifeSpanDays = lifeSpanYears * 365;
let remainingDays = lifeSpanDays - totalNumbersDays;
let relationLived = (totalNumbersDays / lifeSpanDays) * 100;
let relationLivedPercent = Math.round(relationLived, 2) + "%";
let hoursSleept = (totalNumbersDays * 0.3) + " hours";

console.log("Your days lived already:", totalNumbersDays);
console.log("Your remaining days to live:", remainingDays);
console.log("You consumed already:", relationLivedPercent, "of your life");
console.log("Your sleept over in your live:", hoursSleept);
