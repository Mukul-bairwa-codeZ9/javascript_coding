// ============================================================
// LINEAR SEARCH – Interview Preparation (JavaScript)
// ============================================================

// ─────────────────────────────────────────────────────────────
// 1. Searching in an Unsorted Array
//    Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────────────────────
function linearSearch(a, t) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === t) return i;
  }
  return -1;
}

console.log("1. Linear Search:");
console.log(linearSearch([2, 4, 5, 7, 9], 9)); // 4

// ─────────────────────────────────────────────────────────────
// 2. Find All Occurrences
//    Time: O(n) | Space: O(k) — k = number of matches
// ─────────────────────────────────────────────────────────────
function linearSearchWithOccurrences(a, t) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === t) result.push(i);
  }
  return result;
}

console.log("\n2. All Occurrences:");
console.log(linearSearchWithOccurrences([2, 4, 5, 7, 8, 2, 4, 1, 9], 4)); // [1, 6]

// ─────────────────────────────────────────────────────────────
// 3. Linear Search in String
//    Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────────────────────
function checkCharacterExist(s, t) {
  for (let ch of s) {
    if (ch === t) return true;
  }
  return false;
}

console.log("\n3. Character Exists in String:");
console.log(checkCharacterExist("hello", "e")); // true

// ─────────────────────────────────────────────────────────────
// 4. Find Minimum Using Linear Search
//    Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────────────────────
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log("\n4. Find Minimum:");
console.log(findMin([5, 3, 8, 1, 4])); // 1

// ─────────────────────────────────────────────────────────────
// 5. Sentinel Linear Search (Interview Favorite)
//    Reduces comparisons from 2 per iteration → 1 per iteration
//    Time: O(n) | Space: O(1)
// ─────────────────────────────────────────────────────────────
function sentinelLinearSearch(arr, target) {
  let n = arr.length;
  let last = arr[n - 1];

  arr[n - 1] = target; // place sentinel

  let i = 0;
  while (arr[i] !== target) i++; // no boundary check needed

  arr[n - 1] = last; // restore original last element

  if (i < n - 1 || arr[n - 1] === target) return i;
  return -1;
}

console.log("\n5. Sentinel Linear Search:");
console.log(sentinelLinearSearch([2, 4, 5, 7, 9], 9)); // 4
console.log(sentinelLinearSearch([2, 4, 5, 7, 9], 3)); // -1