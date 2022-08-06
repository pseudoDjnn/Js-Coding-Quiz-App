const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");

const finalAddScore = document.getElementById("final-score");
const recentScore = localStorage.getItem("recentScore");

const highScore = JSON.parse(localStorage.getItem("High Score")) || [];

const MAX_SCORE = 8;
// console.log(highScore);

finalAddScore.innerText = recentScore;

username.addEventListener("keyup", () => {
  // console.log(username.value);
  saveScore.disabled = !username.value;
});

saveHighScore = (event) => {
  console.log("High Score!");
  event.preventDefault();

  let score = {
    name: username.value,
    score: recentScore,

    // Look to see if set scoring provieds gain of new high score and drops the lowest score
    // score: Math.floor(Math.random() * 100),
  };
  highScore.push(score);

  // SAME FUNCTION EXPRESSION AS BELOW JUST ANOTHER WAY TO WRITE IT
  // highScore.sort((x,y)=>{
  //   return y.score - x.score;
  // })

  highScore.sort((x, y) => y.score - x.score);

  // KILL COLLECTION AFTER SPECIFIED AMOUNT
  highScore.splice(8);

  // Save string with JSON
  localStorage.setItem("highScore", JSON.stringify(highScore));
  window.location.assign("/");

  // console.log(highScore);
};
