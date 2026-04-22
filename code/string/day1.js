// Reverse a string  with extra space complexity o(n)

let str = "Highway Mountains";

// 🧠 Algorithm: Reverse a String

// Start
// Take input string str
// Create an empty string nstr
// Loop from the last index of str to the first:
// Initialize i = str.length - 1
// While i >= 0:
// Append str[i] to nstr
// Decrement i
// After the loop ends, nstr contains the reversed string
// Return nstr
// End

function ultakaro(str) {
  let nstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    nstr += str[i];
  }

  return nstr;
}

console.log(ultakaro(str));

// Reverse a string  with space complexity o(1)
// : no extra string or array
// : direct modify the array

// NOTE: USE TWO POINTER APPROACH

// 🧠 Algorithm: Reverse Array In-Place (Two Pointers)
// Start
// Take input array s
// Initialize two pointers:
// left = 0 (start of array)
// right = s.length - 1 (end of array)
// Repeat while left < right:
// Swap elements at left and right
// Increment left → left = left + 1
// Decrement right → right = right - 1
// When left >= right, stop
// The array s is now reversed in-place
// End



// this works for array only
var reverseString = function(s) {
    let left=0, right = s.length-1;
    while(left<right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;

    }
};


// 🧠 Interview Insight (very important)

// If interviewer says:

// Case 1:

// 👉 “Reverse array in-place”

// Use two pointers (your LeetCode solution)
// Case 2:

// 👉 “Reverse string without array methods”

// Use loop + build new string (above solution)