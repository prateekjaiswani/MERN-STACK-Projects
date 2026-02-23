// Find longest Consecutive sequence from array

let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6];
let subs = [];

arr.sort((a, b) => {
  return a - b;
});


// function max(subs){
//     let max=0;
//     for(let i=0;i<subs.length;i++){
//       let count=0;
//       for(let j=0;j<subs[i].length;i++){
//         count++;
//       }
//       if(max<count){
//         max=count;
//       }
//     }
//     return max;
// }


let max=0
for (let i = 0; i < arr.length; i++) {
  let cons = [];
  while (arr[i + 1] == arr[i] + 1) {
      cons.push(arr[i]);
      i++;
  }
  if(cons.length>max){
    console.log(cons)
    max=cons.length;
    subs.push[cons];
  }
  
}

console.log(subs);

// console.log(arr)
