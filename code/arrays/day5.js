
// Reverse the Array (Without .reverse())


function reverseArray(data) {
  let reversed = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversed.push(data[i]);
  }
  return reversed;
}