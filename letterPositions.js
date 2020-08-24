const assertArraysEqual = require("./assertArraysEqual");

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

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;