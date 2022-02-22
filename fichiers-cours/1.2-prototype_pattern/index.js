var Task = function (name) {
  this.name = name;
  this.toString = function () {
    console.log("I have to " + this.name);
  };
};

var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");

task1.toString();
task2.toString();
