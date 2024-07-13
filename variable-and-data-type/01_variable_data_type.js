//declare a variable using var and assign it a number and log the value to the console
var numberUsingVar = 5;
console.log('value of variable numberUsingVar is: ', numberUsingVar);

//declare a variable using let and assign it a string and log the value to the console
let stringUsingLet = 'Hello World';
console.log('value of variable stringUsingLet is: ', stringUsingLet);

//declare a variable using const and assign it a boolean and log the value to the console
const booleanUsingConst  = false;
console.log('value of variable booleanUsingConst is: ', booleanUsingConst);

//create variables of different data types( number, string, boolean, object, array) and log each variable's type using typeof operator
const variable1 = 1;
const variable2 = "Hi there";
const variable3 = true;
const variable4 = {name: 'John', age: 25};
const variable5 = [1, 2, 3, 4, 5];
console.log('Type of variable1 is ', typeof variable1);
console.log('Type of variable2 is ', typeof variable2);
console.log('Type of variable3 is ', typeof variable3);
console.log('Type of variable4 is ', typeof variable4);
console.log('Type of variable5 is ', typeof variable5);

//declare a variable using let, assign it an initial value and reassign a new value and log both the values to the console
let myNewVariable = 'Hello World';
console.log('Initial value of myNewVariable is: ', myNewVariable);
myNewVariable = 'Hi there';
console.log('New value of myNewVariable is: ', myNewVariable);


//try reassiging a variable declared with const and observe the error
const myConstVariable = 'Hello World';
myConstVariable = 'Hi there'; //throws error
console.log('New value of myConstVariable is: ', myConstVariable);


//write a script that declares variables of different data types and logs both the value and type of each variable to the console
const variable6 = 1;
const variable7 = "Hi there";
const variable8 = true;
const variable9 = {name: 'John', age: 25};
const variable10 =['apple', 'banana', 'cherry'];
console.log('Value of variable6 is: ', variable6, ' and its type is: ', typeof variable6);
console.log('Value of variable7 is: ', variable7, ' and its type is: ', typeof variable7);
console.log('Value of variable8 is: ', variable8, ' and its type is: ', typeof variable8);
console.log('Value of variable9 is: ', variable9, ' and its type is: ', typeof variable9);
console.log('Value of variable10 is: ', variable10, ' and its type is: ', typeof variable10);


//create a script that demonstrates the difference in behavior between let and const when it comes to reassigning
let myLetVariable = 'Hello World';
console.log('Initial value of myLetVariable is: ', myLetVariable);
myLetVariable = 'Hi there';
console.log('New value of myLetVariable is: ', myLetVariable);

const myConstDemo = 'Hello World';
console.log('Initial value of myConstDemo is: ', myConstDemo);
myConstDemo = 'Hi there'; //throws error
console.log('New value of myConstDemo is: ', myConstDemo);
