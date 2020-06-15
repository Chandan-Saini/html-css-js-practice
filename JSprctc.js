var input = document.getElementById("inp").value;
console.log(input)
var button = document.getElementById("but");
var div = document.getElementById("d1");

button.addEventListener("click", function () {
  div.innerHTML = input;
});
