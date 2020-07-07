
var num= Math.floor(Math.random()*6) +1
document.querySelector(".btn-roll").addEventListener("click", function () {
    dice = document.querySelector(".dice")
    val = document.getElementById("current-0")
    val.textContent= num
    dice.src = "dice-"+ num + ".png";
});

