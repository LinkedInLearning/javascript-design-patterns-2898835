var TaskRepository = function() {
    var items = {};
  
    var add = function(task) {
      items[task.name] = task;
    }
  
    var remove = function(task) {
      items[task.name] = null;
    }
  
    var getAll = function() {
      console.log(items)
      return items;
    }
  
    // revealing pattern
    return {
      add: add, 
      remove: remove, 
      getAll: getAll
    }
  }

  module.exports = TaskRepository;