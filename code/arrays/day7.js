//  Intersection of Two Arrays
// The Challenge: If you had a second array, how would you find the common elements?

const arr2 = [1, 2, 99, 100];

function getIntersection(a, b) {
  const setB = new Set(b);
  return [...new Set(a)].filter(num => setB.has(num));
}
// Result: [1, 2]