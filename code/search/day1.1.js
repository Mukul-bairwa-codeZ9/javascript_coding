// 🔍 Searching in an Unsorted Array
// ❗ Key Point

// 👉 You cannot use binary search
// Because there is no order so we use linerar search

// ALGO

// Start from index 0
// Check each element one by one
// Stop when you find the target

let arr = [2, 4, 5, 7, 9],
  target = 9;

function linearSearch(a, t) {
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] === t) return i;
  }
  return -1;
}

console.log(linearSearch(arr, target));


// Complexity
// Time: O(n)
// Space: O(1)


