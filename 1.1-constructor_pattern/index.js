var Task = function(name) {
    this.name = name;
    this.toString = function() {
        console.log("I have to " + this.name);
    }
}

var task = new Task("learn the JS design patterns");
var task1 = new Task("create new class");
task.toString();
task1.toString()