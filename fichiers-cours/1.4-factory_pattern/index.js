const TYPES = {
  event: "event",
  todo: "todo",
};

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false
  }
  complete() {
    this.completed = !this.completed;
  }
  toString() {
    console.log("Task :"  + this.name)
  }
}

var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");

task1.toString();
task1.complete();
task1.toString();
task2.toString();
