const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(arr1, arr2) {
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
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([], []), true);
