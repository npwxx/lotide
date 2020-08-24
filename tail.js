const assertEqual = require("./assertEqual");
/*const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  }
};*/

const tail = function(input) {
  let output = [];
  for (let i = 1; i < input.length; i++) {
    output.push(input[i]);
  }
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const anotherTest = tail(["Only one element"]);
assertEqual(anotherTest.length, 0);

module.exports = tail;