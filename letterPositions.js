//implement a new function letterPositions which will return all the indices(zero-based positions) in the string
//where each character is found

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

thisString = letterPositions("some sentence");
console.log(thisString);