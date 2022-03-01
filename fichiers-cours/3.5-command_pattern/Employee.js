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

var EmployeeController = {
  add: function(emp) {
    const {first, last } = emp;
    const employee = new Employee(first, last);
    employeeRepository.add(employee)
    console.log("requesting to add new employee " + employee.name);
  }, 
  get: function(emp) {
    const employee = employeeRepository.get(emp)
    console.log("requesting to get existing employee " + employee.name);
  }
}

EmployeeController.execute = function() {
  const [action, args] = arguments;
  if (EmployeeController[action]) {
    return EmployeeController[action].call(this, args);
  }
}

module.exports = EmployeeController
