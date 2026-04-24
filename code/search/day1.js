// BINARY SEARCH 


// 💼 Problem

// Find the index of target in a sorted array.

// 🧠 How It Works

// At every step:

// ALGO 

// Divide array into half
// Compare middle element
// Rules:
// arr[mid] === target → ✅ return
// arr[mid] < target → search right
// arr[mid] > target → search left
// ⏱ Complexity
// Time: O(log n)
// Space: O(1)


let arr = [2, 4, 5, 7, 9], target = 9  

 
function binarySearch(a,t){
    let left=0 , right = a.length-1
 
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(a[mid] === t )  return mid
        else if(a[mid]<t) left = mid +1
        else right = mid-1
    }
    return -1
}

console.log(binarySearch(arr,target))









