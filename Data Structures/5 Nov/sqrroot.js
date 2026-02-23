// find possible minimum square root of any number 
function squarroot(n){

  let i=1, j = n;
  let ans=1;

  while(i<=j){
    mid=Math.floor((i+j)/2)
    if(mid*mid==n){
      return mid;
    }
    if(mid*mid>n){
      j=mid-1;
    }
    else{
      ans=mid;
      i=mid+1;
    }
  }
  
  return ans;

}

console.log(squarroot(8));