var budgetController = (function () {})();

var UIcontroller = (function () {
  
  var DOMstrings= {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  }

  return {
    getinput:function () {
      
      return {
        type: document.querySelector( DOMstrings.inputType).value,         //it will give val like inc exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings:function () {
      return DOMstrings
    }
      
  }

})();

var controller = (function (budgcntrl, UIcntrl) {
  
  var DOM = UIcntrl.getDOMstrings()
  
  var ctrlAddItem= function () {

    var input = UIcntrl.getinput()
    console.log( input);
    console.log("Yes it works");
  }
  
  

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIcontroller);


