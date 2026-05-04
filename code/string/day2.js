// check palidrome


let str = "mukum"
function isPalindrome(s){
    let newStr =''
    for(let i=s.length-1;i>=0;i--){
        newStr+= s[i]
    }
    return newStr === s  ? true : false
}
console.log(isPalindrome(str))

