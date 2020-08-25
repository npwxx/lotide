const assertArraysEqual = require("./assertArraysEqual");

const arr = [1,2,[3,4],5,[6]];
const flatten = function(arr) {
  let flattenedArr = [];
  for (const elem of arr) {
    if (!Array.isArray(elem)) {
      flattenedArr.push(elem);
      //console.log(flattenedArr);
    } else {
      for (const elems of elem) {
        flattenedArr.push(elems);
        //console.log(flattenedArr);
      }
    }
  }
  //console.log(flattenedArr);
  return flattenedArr;
};

// TODO: Tests to be made into own test file
// console.log(flatten(arr));
// assertArraysEqual(flatten(arr), [1,2,3,4,5,6]);

module.exports = flatten;