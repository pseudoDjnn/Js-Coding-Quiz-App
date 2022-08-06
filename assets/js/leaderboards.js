const highScores = JSON.parse(localStorage.getItem("high-score")) || [];
const highScoresList = document.getElementById("score-list");

console.log(highScores);

// .map method first use case to create and populate a nw array
// highScores.map((score) => {\
//   // log ternary and li element acting as html
//   console.log(`<li class="high-score">${score.name}-${score.score}</li>`);
// });

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
  })
  // .join method first use to understand returning a string by concatenating every element
  .join("");
