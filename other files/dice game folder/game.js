
var num= Math.floor(Math.random()*6) +1
document.querySelector(".btn-roll").addEventListener("click", function () {
    dice = document.querySelector(".dice")
    dice.src = "dice-"+ num + ".png";
});
