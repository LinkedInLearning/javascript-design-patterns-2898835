const TaskController = require("./Task");
const EmployeeController = require("./Employee");

TaskController.execute("add", {name: "Learn JS Design Patterns"});
EmployeeController.execute("add", {first: "Sandra", last: "Smith"});
EmployeeController.execute("get", {first: "Sandra", last: "Smith"});