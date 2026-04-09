// find occurences of each element in arrary
c


// find most frequent element in arrary
function findMostFrequent(data){
    let frequency ={}
    let maxCount=0
    let mostFrequentItem = null;
    data.forEach((num,idx)=>{
     frequency[num] = (frequency[num] || 0) + 1;
     
     if(frequency[num]>maxCount){
         maxCount = frequency[num];
      mostFrequentItem = num;
     }
        
    })
  return { 
    item: mostFrequentItem, 
    count: maxCount 
  };
}
console.log(findOccurences(arr))