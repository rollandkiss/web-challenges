console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

let lowerCaseAnswers = null; // Goal of Task / Example: ['as often as you like.', ...]

lowerCaseAnswers = cards.map((cardItem) => {
  return cardItem.answer.toLowerCase();
});
console.log(lowerCaseAnswers);

let questionsAndAnswersTogether = null; // Goal of Task / Example: ["How often can I use <header>? - As often as you like.", ...]

questionsAndAnswersTogether = cards.map((cardItem) => {
  return `${cardItem.question} - ${cardItem.answer}`;
});
console.log(questionsAndAnswersTogether);

let questionAndAnswer = null; // Goal of Task / Example: [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

questionAndAnswer = cards.map((cardItem) => {
  return { question: cardItem.question, answer: cardItem.answer };
});
console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
