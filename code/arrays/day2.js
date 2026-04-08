// find elements from array (frequency = 1)

const arr = [1, 6, 8, 2, 0, 2, 5, 2, 4, 2, 5, 1, 0, 11, 89, 16, 1, 89];

function findOccurences(data) {
  let occurences = {};
  data.forEach((el, idx) => {
    if (occurences[el] !== undefined) {
      occurences[el]++;
    } else occurences[el] = 1;
  });
  return Object.keys(occurences).filter(key=>occurences[key]===1).map(Number)
}
console.log(findOccurences(arr));


// [ 4, 6, 8, 11, 16 ]