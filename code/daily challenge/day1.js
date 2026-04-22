// classic string comparison with limited edits problem

// problem 2452 leetcode
// You are given two string arrays, queries and dictionary. All words in each array comprise of lowercase English letters and have the same length.

// In one edit you can take a word from queries, and change any letter in it to any other letter. Find all words from queries that, after a maximum of two edits, equal some word from dictionary.

// Return a list of all words from queries, that match with some word from dictionary after a maximum of two edits. Return the words in the same order they appear in queries.

// Example 1:

// Input: queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
// Output: ["word","note","wood"]
// Explanation:
// - Changing the 'r' in "word" to 'o' allows it to equal the dictionary word "wood".
// - Changing the 'n' to 'j' and the 't' to 'k' in "note" changes it to "joke".
// - It would take more than 2 edits for "ants" to equal a dictionary word.
// - "wood" can remain unchanged (0 edits) and match the corresponding dictionary word.
// Thus, we return ["word","note","wood"].
// Example 2:

// Input: queries = ["yes"], dictionary = ["not"]
// Output: []
// Explanation:
// Applying any two edits to "yes" cannot make it equal to "not". Thus, we return an empty array.

// Constraints:

// 1 <= queries.length, dictionary.length <= 100
// n == queries[i].length == dictionary[j].length
// 1 <= n <= 100
// All queries[i] and dictionary[j] are composed of lowercase English letters.

// simple terms synopsis

// 🧩 Problem: Two Edit Words (≤ 2 differences)

// You are given:

// queries[]
// dictionary[]

// All words:

// same length n
// lowercase letters
// 🎯 Task:

// Return all words from queries that can match any word in dictionary with at most 2 character changes.

// 💡 Key Idea

// Two words match if:

// Their Hamming distance ≤ 2
// (i.e., number of different characters ≤ 2)

// 🚀 Optimal Approach (Interview Standard)

// We simply:

// For each query
// Compare with each dictionary word
// Count mismatches
// Stop early if mismatch > 2
// Add query if any match found

// 🧪 Example
// Input:
// queries = ["word","note","ants","wood"]
// dictionary = ["wood","joke","moat"]
// Step-by-step:
// Query	Match Found	Reason
// word	wood	1 edit
// note	joke	2 edits
// ants	none	>2 edits
// wood	wood	0 edits
// Output:
// ["word","note","wood"]
// ⏱ Complexity Analysis (VERY IMPORTANT FOR INTERVIEW)
// 🔹 Time Complexity:

// Let:

// Q = number of queries
// D = number of dictionary words
// N = word length
// O(Q × D × N)
// Why?
// Each query compares with all dictionary words
// Each comparison checks up to N characters
// ⚡ Optimizations inside loop:
// ✔ Early stopping in character loop
// Stops when diff > 2
// Reduces average runtime
// ✔ Early stopping in dictionary loop
// Stops once a match is found
// 🔹 Best / Worst Case
// Case	Complexity
// Best case	O(Q × D) (early match)
// Worst case	O(Q × D × N)
// Practical	Very fast due to early breaks
// 🧠 Interview Explanation (Say this)

// “Since constraints are small (100 × 100 × 100), brute force is acceptable. We compare each query with all dictionary words and compute Hamming distance. We optimize by early stopping when differences exceed 2 and stopping dictionary search once a valid match is found.”

// 🚀 Key Takeaways
// This is a Hamming distance ≤ 2 problem
// No advanced DS required
// Early exit = main optimization
// Brute force is optimal for constraints

// solution

function editable(a, b) {
  let diff = 0;

  for (let i = 0; i <= a.length - 1 && diff <= 2; i++) {
    if (a[i] !== b[i]) diff++;
  }

  return diff <= 2;
}
var twoEditWords = function (queries, dictionary) {
  let result = [];
  for (let q of queries) {
    for (let d of dictionary) {
      let valid = editable(q, d);
      if (valid) {
        result.push(q);
        break;
      }
    }
  }
  return result;
};
