class Drink {
    constructor(size = "regular") {
      this.size = size;
      this.sugar = null;
      this.milk = null;
    }
    addSugar = function (sugar) {
      this.sugar = sugar;
    };
  
    addMilk = function (milk) {
      this.milk = milk;
    };
  
    summary = function () {
      var str = "";
      if (this.sugar) {
        str += ", with extras: " + this.sugar;
      }
      if (this.milk) {
        str += ", " + this.milk;
      }
      return str;
    };
  }

  
  module.exports = Drink;