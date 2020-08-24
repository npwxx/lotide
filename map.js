const assertArraysEqual = require("./assertArraysEqual");
/*const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

//const eqArrays = require("./eqArrays");
/*const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined && arr2 === undefined) {
    return true;
  }
  if (arr1 === undefined || arr2 === undefined) {
    return false;
  }
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
const results2 = map(words, word => word);
assertArraysEqual(results2, [ 'ground', 'control', 'to', 'major', 'tom' ]);
const results3 = map(words, word => word.split("").reverse().join(""));
assertArraysEqual(results3, [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]);

module.exports = map;