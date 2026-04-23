// find length of string without length method

let str = "mukum"
function countLength(s){
    let count =0
    for(let ch of s){
        count ++
    }
    return count;
}
console.log(countLength(str))