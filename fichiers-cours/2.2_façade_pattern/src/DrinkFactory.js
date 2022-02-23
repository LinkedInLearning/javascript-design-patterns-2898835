var Tea = require("./Tea");
var Coffee = require("./Coffee");

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

  module.exports = DrinkFactory