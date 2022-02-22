var TaskRepository = function () {
  //private variables
  var items = [];
  var instance = null

  var add = function (task) {
    items[task.id] = task;
  };

  var remove = function (task) {
    items[task.id] = null;
  };
  var getAll = function () {
    return items;
  };

  var getInstance = function() {
    if(!instance) {
      console.log("instance created");
      instance = this;
    }
    console.log("instance returned");
    return instance;
  }

  // revealed methods exposed outside of module
  return {
    add: add,
    remove: remove,
    getAll: getAll,
    instance: getInstance
  };
};

module.exports = TaskRepository;
