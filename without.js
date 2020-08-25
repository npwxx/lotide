const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let output = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      output.push(item);
    }
  }
  return output;
};
// TODO: Tests to be made into own test file
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;