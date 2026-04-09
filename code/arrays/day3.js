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

// Get the unique keys and convert them back to numbers
const occurrencesObj = findOccurences(arr);
const uniqueArr = Object.keys(occurrencesObj).map(Number);

console.log(uniqueArr); 
// Output: [0, 1, 2, 4, 5, 6, 8, 11, 16, 89]