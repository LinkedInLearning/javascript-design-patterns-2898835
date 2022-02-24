const Drink = require("./src/Drink");
const Coffee = require("./src/Coffee");
const Tea = require("./src/Tea");

// visitors

var drink = new Drink();
var drinkExtra = new Drink("extra");

var coffee = new Coffee(drinkExtra, "arabica");
var tea = new Tea(drink, "green tea");

coffee.toString();
tea.toString();
