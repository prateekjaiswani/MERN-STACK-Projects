function searchinsorted (arr,s,n,key){
  let i=s;
  let j=n;
  if(i>j){
    return -1;
  }
  let mid=Math.floor((i+j)/2);
  if(arr[mid]==key){
    return mid;
  }
  if(arr[mid]>key){
    return searchinsorted(arr,s,mid-1,key);
  }else{
    return searchinsorted(arr,mid+1,j,key);
  }

}


console.log(searchinsorted([1,3,4,5,7,18,20,30,42,64],0,9,4));