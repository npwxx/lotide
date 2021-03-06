const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// TODO: Tests to be made into own test file
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// const results2 = map(words, word => word);
// assertArraysEqual(results2, [ 'ground', 'control', 'to', 'major', 'tom' ]);
// const results3 = map(words, word => word.split("").reverse().join(""));
// assertArraysEqual(results3, [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]);

module.exports = map;