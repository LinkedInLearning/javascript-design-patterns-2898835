var Drink = function (size = "regular") {
  this.size = size;
  this.price = size == "extra" ? "5.00 EUR" : "3.00 EUR";
};

// accept

Drink.prototype.setPrice = function (price) {
  console.log("price change to " + price);
  this.price = price;
};

Drink.prototype.addSugar = function (sugar) {
  console.log("adding extra " + sugar);
  this.sugar = sugar;
};

Drink.prototype.addMilk = function (milk) {
  console.log("adding extra " + milk);
  this.milk = milk;
};

module.exports = Drink;
