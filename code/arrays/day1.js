// find occurences of each element in arrary

const arr = [1, 6, 8, 2, 0, 2, 5, 2, 4, 2, 5, 1, 0, 11, 89, 16, 1, 89];

function findOccurences(data) {
  let occurences = {};
  data.forEach((el, idx) => {
    if (occurences[el] !== undefined) {
      occurences[el]++;
    } else occurences[el] = 1;
  });
  return occurences;
}
console.log(findOccurences(arr));
