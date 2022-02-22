const TYPES = {
    event : "event", 
    todo: "todo", 
    // ...
}
class Task {
  constructor(name) {
      this.name = name;
      this.completed = false;
  }
  complete() {
      this.completed = !this.completed;
  }
  toString() {
      if(!this.completed) {
          return console.log("To do: " + this.name)
      }
      console.log("Completed: "+ this.name);
  }
}
class EventTask extends Task {
    constructor(name) {
        super(name)
        this.date = new Date();
        this.scheduledDate = this.date.setDate(this.date.getDate() + 2)
    }

    toString() {
        if(this.scheduledDate < new Date()) {
            return console.log("this event is past due")
        }
        console.log("this event is scheduled on: " + new Date(this.scheduledDate).toLocaleDateString())
    }
}
class TodoTask extends Task {
    constructor(name) {
        super(name)
        this.priorities = ["normal", "high"]
        this.priority = 0;
    }
    makeUrgent() {
        this.priority = !this.priority;
    }
    toString() {
        if(this.priority) {
            return console.log("High priority Task " + this.name)
        }
        console.log("Task :" + this.name)
    }
}

class TaskFactory {
    createTask(type, name) {
        switch(type) {
            case TYPES.event :
                return new EventTask(name)
            case TYPES.todo :
                return new TodoTask(name)
        }
    }
}

var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");
var ev = new EventTask("learn javascript design patterns")
var todo = new TodoTask("create new class JS")

task1.toString()
task2.toString()
task1.complete()
// task1.makeUrgent()
task1.toString()
ev.toString()
todo.toString()
todo.makeUrgent()
todo.toString()

// factory 
console.log("===factory===")

var factory = new TaskFactory()
var ev1 = factory.createTask(TYPES.event, "learn javascript design patterns");
ev1.toString()

var new_task = factory.createTask(TYPES.todo, "pay bills");
new_task.makeUrgent()
new_task.toString()
