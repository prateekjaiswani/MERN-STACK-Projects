// Find Frequency of letters in a Word

let word = "papakehtehainbadanaamkarega";
let letter= "a";
let obj={}
word=word.split('');
// console.log(word)

word.forEach((element)=>{

  if(obj[element]){
    obj[element]++
  }
  else{
    obj[element]=1;
  }
})

// console.log(obj)
console.log(obj[letter]);


