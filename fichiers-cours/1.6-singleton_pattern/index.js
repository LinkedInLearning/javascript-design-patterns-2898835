var TaskRepository = require("./src/TaskRepository");
var Task = require("./src/Task");

var taskRepository = new TaskRepository();
taskRepository.instance()
taskRepository.instance()

var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");

taskRepository.add(task1);
console.log(taskRepository.getAll());
taskRepository.add(task2);
console.log(taskRepository.getAll());
taskRepository.remove(task2);
console.log(taskRepository.getAll());
