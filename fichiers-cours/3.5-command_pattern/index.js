const TaskCommand = require("./Task");
const EmployeeCommand = require("./Employee");

TaskCommand.execute("add", {name: "Learn JS Design Patterns"});
EmployeeCommand.execute("add", {first: "Sandra", last: "Smith"});
EmployeeCommand.execute("get", {first: "Sandra", last: "Smith"});
