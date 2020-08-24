const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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