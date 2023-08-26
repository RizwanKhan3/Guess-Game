const num = document.getElementById("num");
const score = document.getElementById("score");
const highScore = document.getElementById("hscore");
const start = document.getElementById("start");
const real = document.getElementById("real");
let hScore = 0;
highScore.innerHTML = `High Score: ${hScore}`;
let addScore = 20;
score.innerHTML = `Remaining Health: ${addScore}`;

let randomNum = Math.floor(Math.random() * 20 + 1);

// Checking Function
const Check = (e) => {
  const getNum = Number(num.value);
  // console.log(randomNum);
  if(!getNum){
    start.innerHTML = "No Number";
  }
  else if (getNum === randomNum) {
    start.innerHTML = "You Win";
    hScore += randomNum;
    highScore.innerHTML = `High Score: ${hScore}`;
    real.innerHTML = `${hScore}`;
    document.querySelector('html').style.backgroundColor = 'black'
    randomNum = Math.floor(Math.random() * 20 + 1);
  } else if (addScore === 0) {
    start.innerHTML = "Out Of Health Click Again";
    real.innerHTML = `${hScore}`;
    randomNum = Math.floor(Math.random() * 20 + 1);
  } else if (getNum > randomNum) {
    start.innerHTML = "Guess Low";
    addScore -= 1;
    score.innerHTML = `Remaining Health: ${addScore}`;
  } else {
    start.innerHTML = "Guess High";
    addScore -= 1;
    score.innerHTML = `Remaining Health: ${addScore}`;
  }
};

const PlayAgain = () => {
  addScore = 20;
  score.innerHTML = `Remaining Health: ${addScore}`;
  start.innerHTML = "Start Guessing Again!";
  document.querySelector('html').style.backgroundColor =  rgb(46,45,45);
};
