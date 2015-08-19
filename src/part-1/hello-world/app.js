// Get the module "hello-world". using ./ to indicate that it is placed in this subdirectory
var helloWorld = require("./hello-world");

// Call the function "sayHello" whitout any arguments and save the result in the variable "greeting"
var greeting = helloWorld.sayHello();

// Print the result to the terminal (console)
console.log(greeting);
