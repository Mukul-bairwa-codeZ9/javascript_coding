// find character count in string 


let str = "mukum"
function charaterFrequency(s){
    let result={}
    for(let ch of s ){
        if(result[ch] !== undefined){
            result[ch]++
        }
        else {
             result[ch] =1
        }
       
    }
    return result ;
}
console.log(charaterFrequency(str))