// arrange all anagrams in a row in array
// sort a word and make that a key and push the words in the key which become 
// same after sorting 

let arr=["eat","ant","nat","male","tan","tea","lame"];
let anagrams=[]
let obj={};

arr.forEach((element)=>{
  let element1=element.split('').sort().join('');
  // console.log(element1)
// this will seperate letters and make array and the make a combined string
  if(!obj[element1]){
    obj[element1]=[];
    obj[element1].push(element);
  }
  else{
    obj[element1].push(element);
  }
})

for(let [key,value] of Object.entries(obj)){
    anagrams.push(value);
}



console.log(anagrams)


