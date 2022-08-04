const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const timer = document.getElementById("countdown");

// SET VARIABLES
let currentQuestion = {};
let acceptedAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// PARSED OBJECT CONTAINING QUESTIONS
let questions = [
  {
    question: "HTML stands for?",
    choice1: "HyperText Markup Language.",
    choice2: "HyperText Markdown Language.",
    choice3: "Hyperion Tree Money Lawsuit.",
    choice4: "Holy Trinity Mission for Lutherans.",
    answer: 1,
  },
  {
    question: "CSS stands for?",
    choice1: "Colombian Salsa Sandwiches.",
    choice2: "Cooling Stability and Strength.",
    choice3: "Cascading Style Sheets.",
    choice4: "Cascading Style Sheesh!",
    answer: 3,
  },
  {
    question: "Are the HTML tags and elements the same thing?",
    choice1: "Yes.  HTML tags and elements are the same.",
    choice2: "No. HTML elements are defined by a starting tag.",
    choice3: "Yes.  HTML tags are an easier way to say elements.",
    choice4: "No.  HTML elements are defines as tags.",
    answer: 2,
  },
  {
    question: "What does an unordered list in HTML start with?",
    choice1: "p",
    choice2: "ol",
    choice3: "li",
    choice4: "ul",
    answer: 4,
  },
  {
    question: "CSS 'ID' tags begin with...?",
    choice1: "!",
    choice2: ".",
    choice3: "#",
    choice4: "%",
    answer: 3,
  },
  {
    question: "Adding a string and a variable together is called?",
    choice1: "Adding, duh!",
    choice2: "Concatenate.",
    choice3: "Merger.",
    choice4: "You cannot do that in Javascript.",
    answer: 2,
  },
  {
    question: "Where should the relative path for a Javascript file go?",
    choice1: "At the top of the .html file.",
    choice2: "At the top of the 'BODY' element.",
    choice3: "At the bottom of the 'BODY' element.",
    choice4: "At the bottom and the end of your .html file.",
    answer: 3,
  },
  {
    question: "Who created Javascript?",
    choice1: "Brendan Eich",
    choice2: "Terry Davis",
    choice3: "Guido van Rossum",
    choice4: "Jame Gosling",
    answer: 1,
  },
];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;

// TIME
// function countdownTimer() {
countdownTimer = () => {
  // console.log(countdownTimer);
  let decrementTime = 75;
  let movementTime = 1200;
  let timeInterval = setInterval(function () {
    if (decrementTime > 0) {
      timer.textContent = "Timer: " + decrementTime + " seconds";
      decrementTime--;
    } else if (timeInterval == 1) {
      timer.textContent = "Timer: " + decrementTime + "second";
    } else if (!decrementTime) {
      timer.textContent = "Game Over!";
      clearInterval(timeInterval);
      startGame();
    }
  }, movementTime);
};

// START GAME LOOP
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);

  // countdownTimer();
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

// CALL GAME LOOP
countdownTimer();
startGame();
