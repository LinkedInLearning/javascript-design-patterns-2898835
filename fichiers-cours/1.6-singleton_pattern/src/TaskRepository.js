var TaskRepository = function () {
  //private
  let items = [];

  var add = function (task) {
    items[task.id] = task;
  };

  var remove = function (task) {
    items[task.id] = null;
  };
  var getAll = function () {
    return items;
  };

  // revealed methods exposed outside of module
  return {
    add: add,
    remove: remove,
    getAll: getAll,
  };
};

module.exports = TaskRepository;
