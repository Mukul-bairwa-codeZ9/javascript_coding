// Two sum problem

const nums = [2, 7, 11, 15];
let target = 9;

// Output: [0, 1]

// algo
// Full Flow in Simple Words
// 1. Create an empty map
// 2. Loop through array
// 3. For each number:
// Calculate complement
// If complement exists in map → return answer
// Otherwise store current number in map

function twosum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// 🧠 Core Idea (Think in Reverse)

// Instead of checking every pair (which is slow), we ask:

// 👉 “For the current number, what number do I need to reach the target?”

// That needed number is called the complement:

// complement = target - current_number
// 🔄 Step-by-Step Thinking

// Take this example:

// nums = [2, 7, 11, 15]
// target = 9
// Step 1:
// Current = 2
// Complement = 9 - 2 = 7
// Have we seen 7 before? ❌
// Store 2 in map → {2: 0}
// Step 2:
// Current = 7
// Complement = 9 - 7 = 2
// Have we seen 2 before? ✅ YES
// 👉 We found the answer!

// Return indices:

// [0, 1]
// 🗺️ Why Use a Hash Map?

// We use a Map because:

// It lets us check “have we seen this number before?” in O(1) time
// We store:
// number → index
