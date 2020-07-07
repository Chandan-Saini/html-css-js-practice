
var scores, roundScore, activePlayer, dice;
scores=[0,0]
roundScore=0
activePlayer=1

var dice = Math.floor(Math.random()*6) +1

document.querySelector(".btn-roll").addEventListener("click", function () {
    dice = document.querySelector(".dice")
    val = document.getElementById("current-0")
    val.textContent= num
    dice.src = "dice-"+ num + ".png";
});

