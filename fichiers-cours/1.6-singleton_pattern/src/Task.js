var Task = function (name) {
  this.id = new Date().getMilliseconds();
  this.name = name;
  this.completed = false;
};
Task.prototype.complete = function () {
  this.completed = !this.completed;
};
Task.prototype.toString = function () {
  console.log("Task : " + this.name, " completed: " + this.completed);
};
module.exports = Task;
