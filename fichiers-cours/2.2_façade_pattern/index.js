const service = require("./src/service");

const instance = service.instance()

const Menu = {
  arabica: "Arabica coffee",
  americano: "Americano coffee",
  late: "Cafe Late coffee",
  vanilla: "Vanilla Cafe coffee",
  expresso: "Expresso coffee",
  chai: "Chaï Late tea",
  breakfastTea: "Breakfast tea",
};


instance.makeDrink(Menu.arabica, "extra", "honey", "half half");
