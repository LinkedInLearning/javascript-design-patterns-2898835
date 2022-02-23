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

class Tea extends Drink {
  constructor(size = "regular", flavor) {
    super(size);
    this.flavor = flavor;
    this.price = size == "extra" ? "5.00 EUR" : "3.00 EUR";
  }
  toString = function () {
    var summary = this.summary();
    console.log(
      "order ready : " + this.flavor + summary + ", total to pay: " + this.price
    );
  };
}

//new
var DrinkFactory = function () {
  var prepareOrder = function (
    client_choice,
    size = "regular",
    sugar = null,
    milk = null
  ) {
    if (client_choice.split(" ").includes("tea")) {
      console.log("prepare order for tea: " + client_choice);
      var tea = new Tea(size, client_choice);
      if (sugar) {
        tea.addSugar(sugar);
      }
      if (milk) {
        tea.addMilk(milk);
      }
      return tea;
    }

    if (client_choice.split(" ").includes("coffee")) {
      console.log("prepare order for coffee: " + client_choice);
      var coffee = new Coffee(size, client_choice);
      if (sugar) {
        coffee.addSugar(sugar);
      }
      if (milk) {
        coffee.addMilk(milk);
      }
      return coffee;
    }
  };
  return {
    create: prepareOrder,
  };
};

var drinkFactory = new DrinkFactory();
var coffee = drinkFactory.create(
  "arabica coffee",
  "extra",
  "honey",
  "half half"
);
var tea = drinkFactory.create("green tea");

coffee.toString();
tea.toString();
