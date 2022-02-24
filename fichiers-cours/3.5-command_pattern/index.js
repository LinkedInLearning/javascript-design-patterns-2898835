const Task = require("./Task");
const Employee = require("./Employee");

var task = new Task("learn JS");
var employee = new Employee("Sandra", "L");

task.save();
employee.save();
