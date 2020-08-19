const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👌💁Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};


// Use assertEqual to write test cases for various scenarios.
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");