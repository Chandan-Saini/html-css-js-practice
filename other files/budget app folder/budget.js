
var budgetController= (function () {
    var x= 23

    function add(a) {
        return a+x
    }

    return {
        publicTest: function (b) {
            return add(b)
        }
    }
})()


console.log(budgetController.publicTest(20));

var UIcontroller= (function () {
    
})()


var controller= (function (budgcntrl,UIcntrl) {
    var z = budgcntrl.publicTest(34)

    return {
        otherPublic: function () {
            console.log(z);
        }
    }
})(budgetController,UIcontroller)

controller.otherPublic()