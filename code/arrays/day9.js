// 🚀 Problem Statement

// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that:

// nums[i] + nums[j] + nums[k] === target

// ✅ Conditions:
// i ≠ j ≠ k
// No duplicate triplets in the answer


// 🧠 Optimal Approach (Sorting + Two Pointers)
// 💡 Idea:
// Sort the array
// Fix one number
// Use two pointers to find remaining two numbers



// [-1,0,1,2,-1,-4]  >> [[-1,-1,2],[-1,0,1]]




function threeSumTarget(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            } else if (sum < target) {
                left++;   // need bigger sum
            } else {
                right--;  // need smaller sum
            }
        }
    }

    return result;
}



// 1. Sorting
// nums.sort((a, b) => a - b);

// 👉 Required for:

// Two-pointer logic
// Easy duplicate handling
// 🔹 2. Result array
// const result = [];

// 👉 Stores final triplets

// 🔹 3. Loop for fixing first element
// for (let i = 0; i < nums.length - 2; i++)
// ❓ Why nums.length - 2?

// 👉 We need 3 elements:

// nums[i]
// nums[left]
// nums[right]

// 👉 So at least 2 elements must remain after i

// 📊 Example:
// [ a, b, c, d, e ]
//   0  1  2  3  4
// Last valid i = 2
// Because:
// i = 2 → left = 3, right = 4 ✅

// 👉 If i = 3:

// left = 4, right = 4 ❌ invalid

// ✅ That’s why:

// i < nums.length - 2
// 🔹 4. Skip duplicates for i
// if (i > 0 && nums[i] === nums[i - 1]) continue;
// ❓ Why?

// 👉 To avoid repeating same triplets

// 📊 Example:
// [-4, -1, -1, 0, 1, 2]
//       ↑    ↑
// First -1 → valid triplets found
// Second -1 → would generate SAME triplets ❌

// 👉 So we skip it

// 🔹 5. Two pointers
// let left = i + 1;
// let right = nums.length - 1;

// 👉 Search for remaining two numbers

// 🔹 6. While loop
// while (left < right)

// 👉 Continue until pointers meet

// 🔹 7. Calculate sum
// const sum = nums[i] + nums[left] + nums[right];
// 🔹 8. If sum == 0
// result.push([nums[i], nums[left], nums[right]]);

// 👉 Found valid triplet

// 🔹 9. Skip duplicates (left & right)
// while (left < right && nums[left] === nums[left + 1]) left++;
// while (left < right && nums[right] === nums[right - 1]) right--;

// 👉 Avoid duplicate pairs

// 🔹 10. Move pointers
// left++;
// right--;
// 🔹 11. If sum < 0
// left++;

// 👉 Need bigger number

// 🔹 12. If sum > 0
// right--;

// 👉 Need smaller number

// ⚡ Complexity
// Time: O(n²)
// Space: O(1) (excluding output)
// 🎤 Interview-Specific Answer (Say This)

// 👉
// “First, I sort the array. Then I iterate through the array, fixing one element at a time. For each element, I use a two-pointer approach to find two numbers such that their sum with the fixed element equals zero.”

// 👉
// “I skip duplicates for the fixed element and also for the left and right pointers to ensure unique triplets.”

// 👉
// “The time complexity is O(n²) and space complexity is O(1).”

// 🧠 Key Concepts to Remember
// Sort → enables two pointers
// Fix one element
// Use left + right pointers
// Skip duplicates at all levels
// 🎯 Final Memory Trick
// Fix one → find two → skip duplicates → move pointers