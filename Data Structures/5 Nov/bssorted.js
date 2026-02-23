function searchinsorted (arr,key){

  let i=0, j =arr.length-1;

  while(i<=j){
    mid=Math.floor((i+j)/2);
    if(arr[mid]==key){
      return mid;
    }
    if(arr[mid]<key){
      i=mid+1;
    }else{
      j=mid-1;
    }
  }

  return -1;

}


console.log(searchinsorted([1,3,4,5,7,18,20,30,42,64],2));