
// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

function myLocalScope() {

  // Only change code below this line
  var myVar = 'foo';
  console.log(myVar)
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/////////////////////////////////////////////////////////

 // Global vs. Local Scope in Functions
 // It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = 'sweater';


  // Only change code above this line
  return outerWear;
}

myOutfit();

/////////////////////////////////////////////

// Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);

 Example

function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5)

///////////////////////////////////////////////

// Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);

Example

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//////////////////////////////

// Assignment with a Returned Value
// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.
//
// Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);

Example

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

num or (7) + 3 = 10
10 / 5 = 2 so processArg is now = 2 which is also equal to processed now.
/////////////////////////////////////////////////////////

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();

  return removed;
  // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

////////////////////////////////

function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}  

///////////////////////////////////////////////////////


// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. 

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

if (wasThatTrue ) {
  return "Yes, that was true"
}
  return "No, that was false"
  // Only change code above this line
  
}

///////////////////////////////////////////////////////

// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.


// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  
  }
  return "NOT Equal";
}

testEqual(10);

///////////////////////////////////////////////////////

// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(99);

///////////////////////////////////////////////////////

// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

///////////////////////////////////////////////////////


function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return 'Yes'
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(25);
testLogicalAnd(50);

///////////////////////////////////////

function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
} else {
  return "Huge"
}


  // Only change code above this line
};

testSize(21); 
// Output should return Huge since it is over 20.

///////////////////////////////

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);

////////////////////////////////////////////////



function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
// This should retrun alpha in the string answer

////////////////////////////////////////////////

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line


  switch(val) {
    case "bob":
    answer = "Marley"
    break;
    case 42:
    answer = "The Answer"
    break;
    case 1:
    answer = "There is no #1"
    break;
    case 99:
    answer = "Missed me by this much!"
    break;
    case 7:
    answer = "Ate Nine"
    break;
  }

  // Only change code above this line
  return answer;
}
//Changed from if/else to a switch statement
chainToSwitch(7);

////////////////////////////////////

