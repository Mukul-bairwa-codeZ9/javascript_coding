// remove space from string

let str = "m u k um"
function removeSpaces(s){
    let result=''
    for(let ch of s ){
      if(ch !== ' '){
          result+= ch
      }
       
    }
    return result ;
}
console.log(removeSpaces(str))