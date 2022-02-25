const TaskController  = require("./src/Task");
const EmployeeController = require("./src/Employee");

// execute
EmployeeController.execute("add", {first: "Sandra", last: "Smith"});
EmployeeController.execute("add", {first: "John", last: "S"});
EmployeeController.execute("get", {first: "John", last: "S"});

TaskController.execute("add", { name: " Learn JS Design Pattern"});
TaskController.execute("get", { name: " Learn JS Design Pattern"});