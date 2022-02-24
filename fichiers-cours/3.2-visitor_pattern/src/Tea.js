var Tea = function (drink, flavor) {
  this.drink = drink;
  this.flavor = flavor;
};
Tea.prototype.toString = function () {
  if (this.drink.sugar) {
    return console.log(
      "make order for tea : " +
        this.flavor +
        " with " + this.drink.sugar +
        ", total to pay :" +
        this.drink.price
    );
  }
  console.log(
    "make order for tea : " +
      this.flavor +
      ", total to pay: " +
      this.drink.price
  );
};

module.exports = Tea;
