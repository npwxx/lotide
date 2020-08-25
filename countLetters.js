const assertEqual = require("./assertEqual");

const countLetters = function(someString) {
  const letterCount = {};
  for (const item of someString) {
    if (item !== " ") {
      if (letterCount[item]) {
        letterCount[item] += 1;
      } else {
        letterCount[item] = 1;
      }
    }
  }
  //console.log(letterCount)
  return letterCount;
};

// TODO: Tests to be made into own test file
// const someString = "I dont know if this is right";
// const test = countLetters(someString);
// assertEqual(test[" "], undefined);
// assertEqual(test.o, 2);
// assertEqual(test.d, 1);

module.exports = countLetters;