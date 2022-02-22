var Task = function (name) {
  this.name = name;
};

Task.prototype.toString = function () {
  console.log("I have to " + this.name);
};


var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");

console.log(task1)
task1.toString();
task2.toString();
