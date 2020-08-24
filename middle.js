const middle = function(arrInput) {
  if (arrInput.length <= 2) {
    return [];
  }
  if (arrInput.length % 2 !== 0) {
    let oddMiddleIndex = Math.floor(arrInput.length / 2);
    return [arrInput[oddMiddleIndex]];
  }
  if (arrInput.length % 2 === 0) {
    let evenMiddleIndex = arrInput.length / 2;
    return [arrInput[evenMiddleIndex - 1], arrInput[evenMiddleIndex]];
  }

};

module.exports = middle;