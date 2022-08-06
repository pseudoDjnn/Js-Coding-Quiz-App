const username = document.getElementById("username");
const saveScore = document.getElementById("save-btn");

const finalAddScore = document.getElementById("final-score");
const recentScore = localStorage.getItem("recentScore");
finalAddScore.innerText = recentScore;

username.addEventListener("keyup", () => {
  console.log(username.value);
  saveScore.disabled = !username.value;
});

saveHighScore = (event) => {
  console.log("High Score!");
  event.preventDefault();
};
