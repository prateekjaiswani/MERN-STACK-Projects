//find first letter nwhich is not repeating in a string

let word="somethingwhichisnotone";
word=word.split('');

let obj={};


word.forEach((Element)=>{
  if(obj[Element]){
    obj[Element]++
  }else{
    obj[Element]=1;
  }
})

for(let [key,value] of Object.entries(obj)){
  if(value===1){
    console.log(key);
    // return key;
  }
}

console.log(obj)