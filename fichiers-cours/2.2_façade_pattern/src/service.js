const DrinkFactory = require("./DrinkFactory");


var drinkFactory = new DrinkFactory();

var service = function() {
    //private
    var instance = null;

    var checkout = function(drink) {
        console.log("checkout " + drink.price);
    }

    var prepareOrder = function(...args) {
        let drink = drinkFactory.create(...args);
        checkout(drink);
        drink.toString()
        return drink;
    }

    var init = function() {
        if(!instance) {
            instance = this
        }
        return instance;
    }

    return {
        makeDrink: prepareOrder, 
        instance: init
    }
}

module.exports = service()