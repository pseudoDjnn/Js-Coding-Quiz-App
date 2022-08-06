const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");

const finalAddScore = document.getElementById("final-score");
const recentScore = localStorage.getItem("recentScore");

const highScores = JSON.parse(localStorage.getItem("high-score")) || [];

const MAX_SCORE = 8;
// console.log(highScores);

finalAddScore.innerText = recentScore;

username.addEventListener("keyup", () => {
  // console.log(username.value);
  saveScore.disabled = !username.value;
});

saveHighScore = (event) => {
  // console.log("Score is saved!");
  event.preventDefault();

  let score = {
    name: username.value,
    score: recentScore,

    // Look to see if set scoring provieds gain of new high score and drops the lowest score
    // score: Math.floor(Math.random() * 100),
  };
  highScores.push(score);

  // SAME FUNCTION EXPRESSION AS BELOW JUST ANOTHER WAY TO WRITE IT
  // highScore.sort((x,y)=>{
  //   return y.score - x.score;
  // })

  highScores.sort((x, y) => y.score - x.score);

  // KILL COLLECTION AFTER SPECIFIED AMOUNT
  highScores.splice(8);

  // Save string with JSON
  localStorage.setItem("high-score", JSON.stringify(highScores));
  window.location.assign("/index.html");

  console.log(highScores);
};
