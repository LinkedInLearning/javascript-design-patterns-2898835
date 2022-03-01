var EmployeeRepository = function () {
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
    items[item.last] = item;
  };
  var get = function (item) {
    return items[item.last]
  };
  return {
    add: add,
    get: get,
    getAll: getAll,
    instance: getInstance(),
  };
};

const employeeRepository = EmployeeRepository();

var Employee = function (first, last) {
  this.first = first;
  this.last = last;
  this.name = last.toUpperCase() + ", " + first;
};


module.exports = Employee;
