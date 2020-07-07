var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  if (dice !== 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});



document.querySelector(".btn-hold").addEventListener("click", function () {
    scores[activePlayer] += roundScore

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer] 

    if (scores[activePlayer]>=20) {
        document.querySelector("#name-" + activePlayer).textContent="Winner!"
        document.querySelector(".player-"+ activePlayer+"-panel").classList.remove("active");
        document.querySelector(".player-"+ activePlayer+"-panel").classList.add("winner");
        document.querySelector(".dice").style.display = "none";
    }else{
        nextPlayer()
    }
    
     
})








function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector(".dice").style.display = "none";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// document.querySelector(".btn-new").style.display="block"