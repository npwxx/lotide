const assertEqual = require("./assertEqual");
/*const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👌💁Assertion Passed: ${actual} === ${expected}`);
  }
};*/
const eqArrays = require("./eqArrays");
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

// two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  console.log(keys1, keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(obj1[key]) !== Array.isArray(obj2[key])) {
      return false;
    } else if (Array.isArray(obj1[key]) && !eqArrays(obj1[key], obj2[key])) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({a:1}, {a:2}), false);

module.exports = eqObjects;