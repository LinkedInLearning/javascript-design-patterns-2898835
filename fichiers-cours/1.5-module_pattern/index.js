var TaskRepository = require("./src/TaskRepository");
var Task = require("./src/Task");

var task1 = new Task("learn javascript design patterns");
var task2 = new Task("pay bills");

var repository = new TaskRepository()

repository.add(task1)
repository.add(task2)

repository.getAll()
repository.remove(task2)
repository.getAll()



