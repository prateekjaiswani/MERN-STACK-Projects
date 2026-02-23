// sum of subarray elements should be k 
//find the number of subarrays

let arr=[1,2,3,1,2,2,1,1,2,1,1,-2];
// let arr=[1,1,1];
let k=2;
// let subs=[];

// for(let i=0;i<arr.length;i++){
//   let sum=arr[i];
//   let index=[];
//   if(sum===k) subs.push(i);
//   for(let j=i+1;j<arr.length;j++){
//     sum=sum+arr[j];
//     if(sum===k){
//       index.push(i);
//       index.push(j)
//       subs.push(index);
//       index=[]
//     }
//   }
// }

// console.log(subs.length)

// is Sum of i - k has occured before then 
//there is present subarray of sum k  - IMPPPPPP 


let hasOccured={}
let total=0;


function checksubarrayk() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    let reqsum=sum-k;
    if(sum==k || arr[i] == k ){
      total++;
    }
    else if(hasOccured[reqsum]){
      total+=hasOccured[reqsum];
      // hasOccured[reqsum]++;
    }
    if(hasOccured[sum]){
      hasOccured[sum]++;
    }
    if(!hasOccured[sum]){
      hasOccured[sum]=1;
    }

  }
}
checksubarrayk()

// confused and solved
console.log(total)
