/* create a function that takes in two parameters as well:
    * The array to work with
    * The callback
  * return a "slice of the array with elements taken from the beginning."
    It should keep going until the callback/predicate returns a truthy value.
  * the callback should only be provided one value: The item in the array
*/
const takeUntil = function(array, callback) {
  const result = [];
  for (const elem of array) {
    if (!callback(elem)) {
      result.push(elem);
    } else {
      return result;
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👌👌Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅‍♀️🤦‍♀️‍Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
const array1 = ["I","have","a","husky","named","Finn"];
const arrayResult1 = takeUntil(array1, x => x === "named");
assertArraysEqual(arrayResult1, [ 'I', 'have', 'a', 'husky' ]);
const array2 = ["I","have","a","cat","named","Percy","."];
const arrayResult2 = takeUntil(array2, x => x === ".");
assertArraysEqual(arrayResult2, [ 'I', 'have', 'a', 'cat', 'named', 'Percy' ]);

const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2, 1, 2, 4, 5 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
