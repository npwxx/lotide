//implement a new function letterPositions which will return all the indices(zero-based positions) in the string
//where each character is found

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (item !== " ") {
      if (results[item]) {
        results[item].push(i);
      } else {
        results[item] = [i];
      }
    }
  }
  return results;
};

// thisString = letterPositions("some sentence");
// console.log(thisString);

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);