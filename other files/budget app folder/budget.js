var budgetController = (function () {})();

var UIcontroller = (function () {})();

var controller = (function (budgcntrl, UIcntrl) {
  function keyPress() {
    console.log("Yes it works");
  }

  document.querySelector(".add__btn").addEventListener("click", keyPress);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      keyPress();
    }
  });
})(budgetController, UIcontroller);


