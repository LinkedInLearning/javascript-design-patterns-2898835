// objet type
var Drink = function (size = "regular") {
  this.size = size;
};

var Coffee = function(drink, flavor) {
  this.drink = drink;
  this.flavor = flavor;
  this.price = drink.size == "extra" ? "6.00 EUR" : "4.00 EUR"
}

Coffee.prototype.toString = function() {
  console.log("make order for coffee: " + this.flavor + " total to pay : " + this.price)
}

var Tea = function(drink, flavor) {
  this.drink = drink;
  this.flavor = flavor;
  this.price = drink.size == "extra" ? "5.00 EUR" : "3.00 EUR"
}

Tea.prototype.toString = function() {
  console.log("make order for tea: " + this.flavor + " total to pay : " + this.price)
}

var Cappuccino = function(drink, coffee) {
  this.drink = drink;
  this.coffee = coffee;
  this.flavor = "Cocoa";
  this.price = drink.size == "extra" ? "6.50 EUR" : "4.50 EUR"
}

Cappuccino.prototype.toString = function() {
  console.log("make order for cappucino: " + this.flavor + " total to pay : " + this.price)
}

var drink = new Drink()
var drink_extra = new Drink("extra")

var coffee = new Coffee(drink, "arabica");
var tea = new Tea(drink_extra, "green tea");
var cappucino = new Cappuccino(drink_extra, coffee);


coffee.toString()
tea.toString()
cappucino.toString()