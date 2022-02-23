const Drink  = require("./Drink");

class Coffee extends Drink {
    constructor(size = "regular", flavor) {
      super(size);
      this.flavor = flavor;
      this.price = size == "extra" ? "6.00 EUR" : "4.00 EUR";
    }
    toString = function () {
      var summary = this.summary();
      console.log(
        "order ready : " +
          this.flavor +
          summary +
          " - total to pay :" +
          this.price
      );
    };
  }
  module.exports = Coffee