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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙅🤦Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1}, {a:1});
assertObjectsEqual({a:1}, {a:2});