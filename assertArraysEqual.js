const  eqArrays = require("./eqArrays");
// assertArraysEqual will take in two arrays and console.log() an appropriate message to the console.
// this assertion function will make use of your eqArrays function for array comparison
// call the function below its declaration and visually ensure that the message printed to the console is accurate.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;