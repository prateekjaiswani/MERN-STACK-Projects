// Make subarray from array which sum is 0..
// importanttt
let arr = [0, 2, 4, -1, -3, 4, -5, 5];

// let subs=[];
// for(let i=0;i<arr.length;i++){
//   let sum=arr[i];
//   let index=[];
//   if(sum===0) subs.push(i);
//   for(let j=i+1;j<arr.length;j++){
//     sum=sum+arr[j];
//     if(sum===0){
//       index.push(i);
//       index.push(j)
//       subs.push(index);
//       index=[]
//     }
//   }
// }

// console.log(subs)

// APPROACH COOLED
// if sum till i has occured before at k then
// sum from k+1 , i is 0 -- hence we will get the subarray

// let subs = [];

// for(let i=0;i<arr.length;i++){
//   let sum = arr[i];
//   if(sum==0) subs.push(arr[i]);
//   let index=[];
//   for(let j=i+1;j<arr.length;j++){
//     sum=sum+arr[j];
//     if(sum==arr[i]) {
//       index.push(i+1);
//       index.push(j);
//       subs.push(index);
//       index=[];
//     }
//   }
// }
// console.log(subs)

//Final Code of Class for checking availability of array

let hasOccured = {};
let sum = 0;

function checksubarray() {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] === 0 || sum === 0 || hasOccured[sum]){
      return true;
    }
    if (!hasOccured[sum]) {
      hasOccured[sum] = 1;
    }
  }
  return false;
}

console.log(checksubarray());