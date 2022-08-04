const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

// SET VARIABLES
let currentQuestion = {};
let acceptedAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Is",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 1,
  },
  {
    question: "This",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 3,
  },
  {
    question: "Working",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 2,
  },
  {
    question: "Now?",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4,
  },
];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptedAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (x) => {
    // console.log(x.target);
    if (!acceptedAnswers) return;

    acceptedAnswers = false;
    const choiceSelection = x.target;
    const answerSelection = choiceSelection.dataset["number"];
    console.log(answerSelection === currentQuestion.answer);
    getNewQuestion();
  });
});

startGame();
