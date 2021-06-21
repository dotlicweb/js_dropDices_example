var startBtn = document.querySelector("#startBtn");
var container = document.querySelector(".container");
var circle = document.querySelector('.circle');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var player1Name = document.querySelector('#player1Name');
var player2Name = document.querySelector('#player2Name');
var player1Btn = document.querySelector('#player1Btn');
var player2Btn = document.querySelector('#player2Btn');
var player1Current = document.querySelector('#player1Current');
var player2Current = document.querySelector('#player2Current');
var player1Score = document.querySelector('#player1Score');
var player2Score = document.querySelector('#player2Score');
var prikaziRezultatKrugra = document.querySelector('.prikaziRezultatKrugra');
var winner1 = document.querySelector('.winner1');
var winner2 = document.querySelector('.winner2');
var score = document.querySelector('.score');
var startAgain = document.querySelector("#startAgain");
var rounds; 
var player1TotalScore = 0;
var player2TotalScore = 0;
var roundCounter = 0;
var player1FullName;
var player2FullName;
var text='';

player1Btn.addEventListener('click', player1Drop);
function player1Drop() {
  roundCounter += 0.5;
  var rand = Math.ceil(Math.random()*6);
  player1Current.innerHTML = rand;
  this.setAttribute('disabled','disabled');
  player2Btn.removeAttribute('disabled');

  player1TotalScore += parseInt(player1Current.innerHTML);
  player1Score.innerHTML = player1TotalScore;

}

player2Btn.addEventListener('click', player2Drop);
function player2Drop() {
  roundCounter += 0.5;
  var rand = Math.ceil(Math.random()*6);
  player2Current.innerHTML = rand;
  this.setAttribute('disabled','disabled');
  player1Btn.removeAttribute('disabled');

  player2TotalScore += parseInt(player2Current.innerHTML);
  player2Score.innerHTML = player2TotalScore;
  
  circle.innerHTML = Math.floor(roundCounter);
  if(roundCounter === rounds) {
    gameOver();
    startAgain.style.display = "block";
    startAgain.addEventListener('click', startAgainGame);
    score.style.background = "cadetblue";
    score.style.color = "#fff";
  }
  showRound();
}

function gameOver() {
  player2Btn.setAttribute('disabled','disabled');
  player1Btn.setAttribute('disabled','disabled');

  if(player1TotalScore > player2TotalScore) {
    player1.style.background = "green";
  } else if (player1TotalScore < player2TotalScore) {
    player2.style.background = "green";
  } else {
    player1.style.background = "tomato";
    player2.style.background = "tomato";
  }
}

function startAgainGame() {
  roundCounter = 0;
  circle.innerHTML = roundCounter;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1Score.innerHTML = player1TotalScore;
  player2Score.innerHTML = player2TotalScore;
  player1Current.innerHTML = 0;
  player2Current.innerHTML = 0;
  player1.style.background = "transparent";
  player2.style.background = "transparent";
  player1Btn.removeAttribute('disabled');
  score.style.background = "#d1d1d1 ";
  score.style.color = "#000";
  this.style.display = "none";
  text = '';
  prikaziRezultatKrugra.style.display = 'none';
  showRound();
}

startBtn.addEventListener('click', showContainer);
function showContainer() {
  startBtn.style.display = "none";
  container.style.display = "block";
  playersName();
}
function playersName() {
  player1FullName = prompt("Unesi player 1");
  player2FullName = prompt("Unesi player 2");
  rounds = parseInt(prompt("Unesi broj rundi"));
  player1Name.innerHTML = player1FullName;
  player2Name.innerHTML = player2FullName;
}

function showRound() {
  if(roundCounter !== 0) {
  text += `
  <div class="col-1-2">
      <h4>Runda: <span>${roundCounter}</span></h4>
      <h5>${player1FullName}: <span>${player1Current.innerHTML}</span></h5>
      <h5>${player2FullName}: <span>${player2Current.innerHTML}</span></h5>
  </div>
  `
  prikaziRezultatKrugra.innerHTML = text;
  prikaziRezultatKrugra.style.display = 'flex';
}
}