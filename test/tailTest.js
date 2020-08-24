const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return everything in array except the first element", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']), ['Lighthouse','Labs']);
  });
  it("should not modify the array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("should check single element location in array", () => {
    const singleElemArr = tail(["Only 1 element"]);
    assert.strictEqual(singleElemArr.length, 0);
  });
});
