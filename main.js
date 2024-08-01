// There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

// Built-in Objects
console.log(Math.random()); // Prints a random number between 0 and 1

// To generate a random number between 0 and 50, we could multiply this result by 50, like so:

console.log(Math.random() * 50);

// Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

console.log(Math.floor(Math.random() * 50));

// Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
// Use this method with the number 43.8. Log the answer to the console.

// Use the .ceil() method to calculate the smallest integer greater than or equal to 43.8.
console.log(Math.ceil(43.8));

// Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
// Put the number 2017 in the parentheses of the method and use console.log() to print the result.

console.log(Number.isInteger(2017));

// VARIABLES
// String Interpolation
// In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

const myPet = "armadillo";
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

// Notice that:

// a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
// Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
// When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
// One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.

// typeof operator
// While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

// The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

const unknown1 = "foo";
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean

// Let’s break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.

// INTRODUCTION TO JAVASCRIPT
// Review
// Let’s take one more glance at the concepts we just learned:

// Data is printed, or logged, to the console, a panel that displays messages, with console.log().
// We can write single-line comments with // and multi-line comments between /* and */.
// There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
// Numbers are any number without quotes: 23.8879
// Strings are characters wrapped in single or double quotes: 'Sample String'
// The built-in arithmetic operators include +, -, *, /, and %.
// Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
// Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
// We can access properties and methods by using the ., dot operator.
// Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

// VARIABLES
// Review Variables
// Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.

// Let’s review what we learned:

// Variables hold reusable data in a program and associate it with a name.
// Variables are stored in memory.
// The var keyword is used in pre-ES6 versions of JS.
// let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
// Variables that have not been initialized store the primitive data type undefined.
// Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
// The + operator is used to concatenate strings including string values held in variables.
// In ES6, template literals use backticks ` and ${} to interpolate values into a string.
// The typeof keyword returns the data type (as a string) of a value.

// Logical Operators
// Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)
// When we use the && operator, we are checking that two things are true:

if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}

// When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.

// If we only care about either condition being true, we can use the || operator:

if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Do some work.");
}

// When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if‘s condition will evaluate to true and its code block will execute. If the first condition in an || statement evaluates to true, the second condition won’t even be checked. Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else statement above will execute only if both comparisons evaluate to false.

// The ! not operator reverses, or negates, the value of a boolean:

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.

// Logical operators are often used in conditional statements to add another layer of logic to our code.

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// CONDITIONAL STATEMENTS
// Truthy and Falsy Assignment
// Truthy and falsy evaluations open a world of short-hand possibilities!

// Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let userName = "";
let defaultName;

if (username) {
  defaultName = userName;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); // Prints: Stranger

// If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

let username = "";

defaultName = username || "Stranger";

console.log(defaultName); // Prints: Stranger

// Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

// CONDITIONAL STATEMENTS
// Ternary Operator
// In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

// Take a look at the if...else statement example:

let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

// We can use a ternary operator to perform the same functionality:

isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");

// In the example above:

// The condition, isNightTime, is provided before the ?.
// Two expressions follow the ? and are separated by a colon :.
// If the condition evaluates to true, the first expression executes.
// If the condition evaluates to false, the second expression executes.
// Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

//   Else If Statements
// We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

// The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

let stopLight = "yellow";

if (stopLight === "red") {
  console.log("Stop!");
} else if (stopLight === "yellow") {
  console.log("Slow down.");
} else if (stopLight === "green") {
  console.log("Go!");
} else {
  console.log("Caution, unknown!");
}

// The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

// In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// CONDITIONAL STATEMENTS
// The switch keyword
// else if statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:

let groceryItem = "papaya";

if (groceryItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papayas are $1.29");
} else {
  console.log("Invalid item");
}

// In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}

// Prints 'Papayas are $1.29'

// The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
// Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
// The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
// The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
// At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.

let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

// CONDITIONAL STATEMENTS
// Review
// Way to go! Here are some of the major concepts for conditionals:

// An if statement checks a condition and will execute a task if that condition evaluates to true.
// if...else statements make binary decisions and execute different code blocks based on a provided condition.
// We can add more conditions using else if statements.
// Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// The logical operator ||, or “or”, checks if either provided expression is truthy.
// The bang operator, !, switches the truthiness and falsiness of a value.
// The ternary operator is shorthand to simplify concise if...else statements.
// A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

let userNamee = "";
userName ? console.log(`Hello, ${userNamee}!`) : console.log("Hello!");
const userQuestion = "what your name";
console.log(`${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
// Control flow using a switch statement to assign a Magic Eight Ball reply based on the value of randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "Reply hazy, try again";
    break;
  case 2:
    eightBall = "Don’t count on it";
    break;
  case 3:
    eightBall = "Ask again later";
    break;
  case 4:
    eightBall = "My sources say no";
    break;
  case 5:
    eightBall = "Yes, definitely";
    break;
  case 6:
    eightBall = "Cannot predict now";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Invalid randomNumber";
}

// Now eightBall holds the Magic Eight Ball reply based on the value of randomNumber
console.log(eightBall);

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "Reply hazy, try again";
} else if (randomNumber === 2) {
  eightBall = "Don’t count on it";
} else if (randomNumber === 3) {
  eightBall = "Ask again later";
} else if (randomNumber === 4) {
  eightBall = "My sources say no";
} else if (randomNumber === 5) {
  eightBall = "Yes, definitely";
} else if (randomNumber === 6) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 7) {
  eightBall = "Outlook not so good";
} else {
  eightBall = "Invalid randomNumber";
}

console.log(eightBall);

// FUNCTIONS

// Functions
// Function Declarations

// In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a function declaration below:
// Diagram showing the syntax of a function declaration

// A function declaration consists of:

//     The function keyword.
//     The name of the function, or its identifier, followed by parentheses.
//     A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

// A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

// We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

// Take a look at example of hoisting:

greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log("Hello, World!");
}

// Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

// If you want to read more about hoisting, check out MDN documentation on hoisting.

// Parameters and Arguments
// So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

// Let’s observe how to specify parameters in our function declaration:

// JavaScript syntax for declaring a function with parameters
// In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

// When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

// JavaScript syntax for invoking a function with arguments as values
// In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

// JavaScript syntax for invoking a function with arguments as variables
// The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

// By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.

// Helper Functions

// We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

// If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59

// In the example above:

//     getFahrenheit() is called and 15 is passed as an argument.
//     The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
//     multiplyByNineFifths() takes the argument of 15 for the number parameter.
//     The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
//     27 is returned back to the function call in getFahrenheit().
//     getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
//     Finally, 59 is returned back to the function call getFahrenheit(15).

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

// FUNCTIONS
// Function Expressions
// Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

// Consider the following function expression:

// defining a function expression
// To declare a function expression:

// Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

// Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

// To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

// variableName(argument1, argument2)

// Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

// Let’s define a new function using a function expression.

const plantNeedWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater("Tuesday");

console.log(plantNeedsWater("Tuesday"));

// FUNCTIONS
// Arrow Functions
// ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

// Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

// Change plantNeedsWater() to use arrow function syntax.
const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

// It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.

// Concise Body Arrow Functions
// JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:
const plantNeedWaters = (day) => (day === "Wednesday" ? true : false);

// Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

// showcasing how arrow functions parameters differ for different amounts of parameters
// A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

// comparing single line and multiline arrow functions
// So if we have a function:

const squareNum = (num) => {
  return num * num;
};

// We can refactor the function to:

// const squareNum = num => num * num;

// Notice the following changes:

// The parentheses around num have been removed, since it has a single parameter.
// The curly braces { } have been removed since the function consists of a single-line block.
// The return keyword has been removed since the function consists of a single-line block.

const plantNeedsWaters = (day) => (day === "Wednesday" ? true : false);

// FUNCTIONS
// Review Functions
// Give yourself a pat on the back, you just navigated through functions!

// In this lesson, we covered some important concepts about functions:

// A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

// A function declaration :

// Diagram showing the syntax of a function declaration
// A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:

// JavaScript syntax for declaring a function with parameters
// To call a function in your code:

// Diagram showing the syntax of invoking a function
// ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

// To return a value from a function, we use a return statement.

// To define a function using function expressions:

// defining a function expression
// To define a function using arrow function notation:

// Function definition can be made concise using concise arrow notation:

// comparing single line and multiline arrow functions
// It’s good to be aware of the differences between function expressions, arrow functions, and function declarations. As you program more in JavaScript, you’ll see a wide variety of how these function types are used.

// Scope

// An important idea in programming is scope. Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

// You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

// Blocks and Scope

// Before we talk more about scope, we first need to talk about blocks.

// We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

// A block of code could be a function, like this:

const logSkyColor = () => {
  let color = "blue";
  console.log(color); // blue
};

// Notice that the function body is actually a block of code.

// Observe the block in an if statement:

if (dusk) {
  let color = "pink";
  console.log(color); // pink
}

const city = "New York City";
const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};

console.log(logCitySkyline());

// Global Scope

// Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

// In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

// Let’s take a look at an example of global scope:

const color = "blue";

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

// Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
// In turn, color can be accessed within the returnSkyColor function block.
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () =>
  "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;

console.log(callMyNightSky());

// Block Scope

// The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

// Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

// Block scope works like this:

const logSkyColors = () => {
  let color = "blue";
  console.log(color); // Prints "blue"
};

logSkyColors(); // Prints "blue"
console.log(color); // throws a ReferenceError

// You’ll notice:

//     We define a function logSkyColor().
//     Within the function, the color variable is only available within the curly braces of the function.
//     If we try to log the same variable outside the function, it throws a ReferenceError.

const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};

console.log(logVisibleLightWaves());
// console.log(lightWaves);

// Beneath the function call, log the value of lightWaves to the console from outside the function.

// You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

// Scope Pollution

// It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

// When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

// Let’s look at an example of scope pollution in practice so we know how to avoid it:

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

// You’ll notice:

//     We have a variable num.
//     Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
//     When we call logNum(), num gets reassigned to 100.
//     The reassignment inside logNum() affects the global variable num.
//     Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.

// While it’s important to know what global scope is, it’s best practice to not define variables in the global scope.

// Practice Good Scoping

// Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

// Tightly scoping your variables will greatly improve your code in several ways:

//     It will make your code more legible since the blocks will organize your code into discrete sections.
//     It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
//     It’s easier to maintain your code, since your code will be modular.
//     It will save memory in your code because it will cease to exist after the block finishes running.

// Here’s another example of how block scope works, as defined within an if block:

const logSkysColor = () => {
  const dusk = true;
  let color = "blue";
  if (dusk) {
    let color = "pink";
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError

// Here, you’ll notice:

//     We create a variable color inside the logSkyColor() function.
//     After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
//     Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
//     On the last line, we attempt to print the value of color outside both the if statement and the definition of logSkyColor(). This will throw a ReferenceError since color only exists within the scope of those two blocks — it is never defined in the global scope.
//     While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

// Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

// LOOPS
// Do...While Statements
// In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

// Arrays
// Create an Array

// One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.
// Diagram outlining an array literal that has 3 separate elements, a comma separates each element (a string, a number, and a boolean) and the elements are wrapped with square brackets

// Let’s take a closer look at the syntax in the array example:

//     The array is represented by the square brackets [] and the content inside.
//     Each content item inside an array is called an element.
//     There are three different elements inside the array.
//     Each element inside the array is a different data type.

// We can also save an array to a variable. You may have noticed we did this in the previous exercise:

// Accessing Elements

// Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

// Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:
// Diagram outlining how to access the property of an array using the index of the element

// In the code snippet above:

//     cities is an array that has three elements.
//     We’re using bracket notation, [] with the index after the name of the array to access the element.
//     cities[0] will access the element at index 0 in the array cities. You can think of cities[0] as accessing the space in memory that holds the string 'New York'.

// You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

const hello = "Hello World";
console.log(hello[6]);
// Output: W

// The console will display W since it is the character that is at index 6.

// Update Elements

// In the previous exercise, you learned how to access elements inside an array or a string by using an index. Once you have access to an element in an array, you can update its value.

let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// In the example above, the seasons array contained the names of the four seasons.

// However, we decided that we preferred to say 'Autumn' instead of 'Fall'.

// The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.

// Arrays
// Arrays with let and const

// You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

// Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

// The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
condiments = ["Mayo"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

utensils[3] = "Spoon";

condiments[0] = "Mayo";
console.log(condiments);
console.log(condiments);
console.log(utensils);

// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';

// console.log(condiments);

// condiments = ['Mayo'];

// console.log(condiments);

// Arrays
// The .length property

// One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings. Check the example below:

const newYearsResolution = ["Keep a journal", "Take a falconry class"];

console.log(newYearsResolution.length);
// Output: 2

// In the example above, we log newYearsResolutions.length to the console using the following steps:

//     We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.
//     Then we log the length of newYearsResolution to the console.
//     Since newYearsResolution has two elements, 2 would be logged to the console.

// When we want to know how many elements are in an array, we can access the .length property.

// The .push() Method

// Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

// One method, .push(), allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ["item 0", "item 1", "item 2"];

itemTracker.push("item 3", "item 4");

console.log(itemTracker);

// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// So, how does .push() work?

//     We access the push method by using dot notation, connecting push to itemTracker with a period.
//     Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
//     .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
//     Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.

// If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!

const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("wash", "water");
console.log(chores);

// The .pop() Method

// Another array method, .pop(), removes the last item of an array.

const newItemTracker = ["item 0", "item 1", "item 2"];

const remove = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(remove);
// Output: item 2

//     In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
//     .pop() does not take any arguments, it simply removes the last element of newItemTracker.
//     .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
//     .pop() is a method that mutates the initial array.

// When you need to mutate an array by removing the last element, use .pop().

const chore = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

const removed = chore.pop();

console.log(chores);
console.log(removed);

// Arrays
// Nested Arrays

// Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

const nestedArr = [[1], [2, 3]];

// To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]

// Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

// In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

let newYearsResolutions = [
  "Keep a journal",
  "Take a falconry class",
  "Learn to juggle",
];

let countString = "";
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

// Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = "I will print!";
const secondMessage = "I will not print!";

// A do while with a stopping condition that evaluates to false
do {
  console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
  console.log(secondMessage);
}

// Note: To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop(s).

let cupsOfSugarNeeded = 4;

let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded + " cup of sugar was added");
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

// LOOPS
// Review
// Great job! In this lesson, we learned how to write cleaner code with loops. You now know:

// Loops perform repetitive actions so we don’t have to code that process manually every time.
// How to write for loops with an iterator variable that increments or decrements
// How to use a for loop to iterate through an array
// A nested for loop is a loop inside another loop
// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.
// do...while loops run code at least once— only checking the stopping condition after the first execution
// The break keyword allows programs to leave a loop during the execution of its block

// HIGHER-ORDER FUNCTIONS
// Functions as Parameters
// As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

// When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

const higherOrderFunc = (param) => {
  param();
  return `I just invoked ${param.name} as a callback function!`;
};

const anotherFunc = () => {
  return "I'm being invoked by the higher-order function!";
};

higherOrderFunc(anotherFunc);

// We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

// Below the higher-order function, we have another function aptly named anotherFunc. This function aspires to be called inside the higher-order function.

// Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
});

// In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

// Let’s get some practice writing higher-order functions.

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : "inconsistent results";
};

console.log(checkConsistentOutput(addTwo, 10));

// ITERATORS
// The .forEach() Method
// The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
// Diagram outlining the parts of an array iterator including the array identifier, the section that is the iterator, and the callback function

// The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().

// groceries.forEach() calls the forEach method on the groceries array.
// .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
// .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
// The return value for .forEach() will always be undefined.
// Another way to pass a callback for .forEach() is to use arrow function syntax.

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach((fruitsItem) => console.log(`I want to eat a ${fruitsItem}`));

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((bigNumber) => bigNumber / 100);

console.log(smallNumbers);

const pet = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = pet.findIndex((index) => index === "elephant");

const startsWithS = pet.findIndex((animal) => animal[0] === "s");

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);

  console.log("The value of currentValue: ", currentValue);

  return accumulator + currentValue;
}, 10);

console.log(newSum);

//  Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

// Take a look at the code snippet below that uses a default parameter:

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

// In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

// When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

// When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.


// Write your fasterShip object literal below
let fasterShip = {
'Fuel Type' : 'Turbo Fuel',
color : 'silver'
}



let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(isActive)

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.',
 
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 1;
delete spaceship['Secret Mission'];


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff()


const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'


let spaceship = {
  passengers: [
    {
      name : 'dave'
    }
  ],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0]
let firstPassenger = spaceship.passengers[0]





const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'


let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj  => {
  obj.disabled = true;
}

greenEnergy(spaceship)
remotelyDisable(spaceship) 

console.log(spaceship)


greenEnergy(spaceship)
remotelyDisable(spaceship) 
 console.log(spaceship)






























let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
  
   'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
     medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
 translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
}; 

// Write your code below



