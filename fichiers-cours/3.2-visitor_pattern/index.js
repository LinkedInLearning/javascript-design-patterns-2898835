const Drink = require("./src/Drink");
const Coffee = require("./src/Coffee");
const Tea = require("./src/Tea");

// visitors
var AddSugar = function() {
    this.name = "Add Sugar";
    const [sugar] = arguments;
    this.visit = function(drink) {
        drink.addSugar(sugar);
    }
}

var AddMilk = function() {
    this.name = "Add Milk";
    const [sugar] = arguments;
    this.visit = function(drink) {
        drink.addSugar(sugar);
    }
}

// extra options
var honey = new AddSugar("honey")
var half_half = new AddMilk("half_half")

// order #1
var drinkExtra = new Drink("extra");
var coffee = new Coffee(drinkExtra, "arabica");
drinkExtra.accept(half_half)

// order #2
var drink = new Drink();
var tea = new Tea(drink, "green tea");
drink.accept(honey)

coffee.toString();
tea.toString();
