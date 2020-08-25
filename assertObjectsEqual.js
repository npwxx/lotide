const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙅🤦Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TODO: Tests to be made into own test file
//assertObjectsEqual({a:1}, {a:1});
//assertObjectsEqual({a:1}, {a:2});

module.exports = assertObjectsEqual;