// Move All Zeros to the End
// The Challenge: Modify the array (or create a new one) so all 0s are at the end, but the relative order of the other numbers remains the same.

function moveZeros(data) {
  let nonZeros = data.filter(num => num !== 0);
  let zeros = data.filter(num => num === 0);
  return [...nonZeros, ...zeros];
}