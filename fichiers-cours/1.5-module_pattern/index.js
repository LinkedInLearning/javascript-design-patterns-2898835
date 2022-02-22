class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    this.completed = !this.completed;
  }
  toString() {
    console.log("Task : " + this.name + ", completed:" + this.completed);
  }
}

var task1 = new Task("learn javascript design patterns");


task1.toString();
task1.complete();
task1.toString();
