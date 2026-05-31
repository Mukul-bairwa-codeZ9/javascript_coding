

console.log(maxAreaWithIndices([1,8,6,2,5,4,8,3,7]));

function maxAreaWithIndices(arr){
    let left=0;
    let right = arr.length -1
    
    let maxwater = 0
    let result = [];
    
    while(left<right){
        let area  = (right-left)* Math.min(arr[left],arr[right])
        
        if(area>maxwater){
            maxwater = area;
            result = [left, right];
        }
        
        if(arr[left]<arr[right]){
            left++
        }
        else right-- ;
        
    }
    
    return result 
    
}
[ 1, 8 ]

// Interview Cheat Sheet
// 1. Start with left = 0, right = n-1

// 2. Calculate:
//    area = (right - left) *
//           min(height[left], height[right])

// 3. Update maxArea

// 4. Move pointer with smaller height

// 5. Repeat until left >= right




// Template to Remember



// let left = 0;
// let right = arr.length - 1;
// let max = 0;

// while (left < right) {
//     let area =
//         (right - left) *
//         Math.min(arr[left], arr[right]);

//     max = Math.max(max, area);

//     if (arr[left] < arr[right]) {
//         left++;
//     } else {
//         right--;
//     }
// }