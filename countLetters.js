const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(someString) {
  const letterCount = {};
  for (const item of someString) {
    if (letterCount[item]) {
      letterCount[item] += 1;
    } else {
      letterCount[item] = 1;
    }
  }
  //console.log(letterCount)
  return letterCount;
};

const someString = "I dont know if this is right";
const test = countLetters(someString);
assertEqual(test[" "], 6);
assertEqual(test.o, 2);
assertEqual(test.d, 2);
