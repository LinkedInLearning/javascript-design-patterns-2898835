var Coffee = function (drink, flavor) {
  this.drink = drink;
  this.flavor = flavor;
};

Coffee.prototype.toString = function () {
  if (this.drink.sugar) {
    return console.log(
      "make order for coffee : " +
        this.flavor +
        " with " + this.drink.sugar +
        ", total to pay :" +
        this.drink.price
    );
  }
  console.log(
    "make order for coffee : " +
      this.flavor +
      ", total to pay :" +
      this.drink.price
  );
};

module.exports = Coffee;
