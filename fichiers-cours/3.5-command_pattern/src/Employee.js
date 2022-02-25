const CommandController = require("./CommandController");
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

  var get = function(item) {
    return items[item.last]
  }
  return {
    add: add,
    get: get,
    getAll: getAll,
    instance: getInstance(),
  };
};

const employeeRepository = EmployeeRepository()

var Employee = function (first, last) {
  this.first = first;
  this.last = last;
  this.name = last.toUpperCase() + ", " + first;
};

Employee.prototype.save = function () {
  console.log("saving " + this.name);
  employeeRepository.add(this);
};

var Controller = {
  add: function(emp) {
    const {first, last} = emp;
    const employee = new Employee(first, last);
    employeeRepository.add(employee);
    console.log("ADD action:  " + last.toUpperCase() +", "+ first)
  }, 
  get: function(emp) {
   const emplpyee = employeeRepository.get(emp);
   console.log("GET action:  " + emplpyee.last.toUpperCase() +", "+ emplpyee.first)
  }, 
}

const EmployeeController = new CommandController(Controller)

module.exports = EmployeeController
