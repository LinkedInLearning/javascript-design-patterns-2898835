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
    items[this.name] = item;
  };
  return {
    add: add,
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

Task.prototype.save = function () {
  console.log("saving " + this.name);
  taskRepository.add(this);
};

module.exports = Task;
