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


  module.exports = Task;