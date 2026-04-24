// 💼 Problem

// Find the first and last occurrence of a given element in an array.

// Example
// Input: arr = [2, 5, 4, 7, 4, 9], target = 4  
// Output: { first: 2, last: 4 }


// 🧠 Approach 1: Linear Scan (Unsorted Array)
// 🔹 Algorithm
// Initialize:
// first = -1
// last = -1
// Traverse the array from index 0 → n-1
// If element equals target:
// If first == -1, set first = index
// Always update last = index
// Return {first, last}



// ⏱ Complexity
// Time: O(n)
// Space: O(1)

let arr = [2,  5, 4, 7, 4, 9], target = 4  


function findFirstAndLast(a,t){
    let first =-1 ,last=-1
    for(let i=0 ; i<a.length-1;i++){
        if(a[i]=== t){
            if(first === -1) first = i
                last =i
        }
    }
    return {first,last}
}
console.log(findFirstAndLast(arr,target))     // { first: 2, last: 5 }





// 🚀 Approach 2: Binary Search (Sorted Array)

// 👉 Use this only if array is sorted.

// 🔹 Algorithm
// First Occurrence:
// Use binary search
// When found:
// Store index
// Move left (right = mid - 1)
// Last Occurrence:
// Use binary search
// When found:
// Store index
// Move right (left = mid + 1)



// ⏱ Complexity
// Time: O(log n)
// Space: O(1)


function findBound(arr, target, isFirst) {
    let left = 0, right = arr.length - 1;
    let res = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            res = mid;
            if (isFirst) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
}

function findRange(arr, target) {
    return {
        first: findBound(arr, target, true),
        last: findBound(arr, target, false)
    };
}

// Example
console.log(findRange([1,2,2,2,3,4], 2));
// { first: 1, last: 3 }





// 🎯 Interview Answer (What to Say)

// 👉 Start with:

// “If the array is unsorted, I’ll use a linear scan in O(n).”

// 👉 Then add:

// “If the array is sorted, I can optimize using binary search to O(log n) by finding left and right boundaries.”