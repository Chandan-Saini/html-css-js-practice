var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    // var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    // var diceDOM2 = document.querySelector(".dice2");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    // diceDOM2.src = "dice-" + dice2 + ".png";

    if (((dice !== 1))) {
      roundScore += (dice);
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {

    scores[activePlayer] += roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    var input = document.getElementById("inp").value
    var winningScore

    if (input) {
      winningScore=input
    }else{
      winningScore=50;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector(".dice").style.display = "none";
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}


