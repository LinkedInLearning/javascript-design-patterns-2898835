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
    items[this.name] = item;
  };
  return {
    add: add,
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

Employee.prototype.save = function () {
  console.log("saving " + this.name);
  employeeRepository.add(this);
};

module.exports = Employee;
