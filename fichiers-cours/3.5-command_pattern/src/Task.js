const CommandController = require("./CommandController");

var TaskRepository = function () {
  var instance = null;
  var items = {};

  var getInstance = function () {
    if (!instance) {
      instance = this;
    }
    return instance;
  };
  var getAll = function () {
    return items;
  };

  var add = function (item) {
    items[item.name] = item;
  };

  var get = function(item) {
    return items[item.name]
  }
  return {
    add: add,
    get: get, 
    getAll: getAll,
    instance: getInstance(),
  };
};

const taskRepository = TaskRepository();

var Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.completed = function () {
  this.completed = !this.completed;
};

Task.prototype.save = function (name) {
  const task = new Task(name)
  taskRepository.add(task);
  console.log("saving " + task.name)
};

var Controller = {
  add: function(task) {
    const { name } = task;
    Task.prototype.save(name) 
  }, 
  get: function(task) {
   const t = taskRepository.get(task);
   console.log("GET action:  " + t.name )
  }, 
}

const TaskController = new CommandController(Controller)
module.exports = TaskController
