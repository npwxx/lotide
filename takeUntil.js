const assertArraysEqual = require("./assertArraysEqual");

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
// TODO: Tests to be made into own test file
// const array1 = ["I","have","a","husky","named","Finn"];
// const arrayResult1 = takeUntil(array1, x => x === "named");
// assertArraysEqual(arrayResult1, [ 'I', 'have', 'a', 'husky' ]);
// const array2 = ["I","have","a","cat","named","Percy","."];
// const arrayResult2 = takeUntil(array2, x => x === ".");
// assertArraysEqual(arrayResult2, [ 'I', 'have', 'a', 'cat', 'named', 'Percy' ]);

// const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2, 1, 2, 4, 5 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;