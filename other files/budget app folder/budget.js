var budgetController = (function () {

  var Expence= function (id,description,value) {
    this.id=id
    this.description=description
    this.value=value
  }

  var Income= function (id,description,value) {
    this.id=id
    this.description=description
    this.value=value
  }

  var data={
    allItems:{
      exp:[],
      inc:[]
    },
    totals:{
      exp:0,
      inc:0
    }
  }

  return {

    addItems: function (type,des,val) {
        
       var item= data.allItems[type].push()

       return item
    }
  }

})();


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
  
  
  
  var setupEventListeners= function() {

           var DOM = UIcntrl.getDOMstrings()
           
           document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

           document.addEventListener("keypress", function (event) {
             if (event.keyCode === 13 || event.which === 13) {
               ctrlAddItem();
             }
           });
  }

  var ctrlAddItem= function () {

    var input = UIcntrl.getinput()
    console.log( input);
  }
  
    return {
      init: function() {
        console.log("Application has started");
        setupEventListeners()
      }
    }

})(budgetController, UIcontroller);

controller.init()

