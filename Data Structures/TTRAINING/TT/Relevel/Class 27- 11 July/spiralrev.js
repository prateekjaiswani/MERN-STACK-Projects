let arr=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let m=arr.length;
let n=arr[0].length;


function spiral(arr,m,n){
    let k=0,l=0;
    while(k<m && l<n){
    for(let i=k;i<m;i++){
        console.log(arr[i][k]);
    }
    k++
    for(let i=k;i<n;i++){
        console.log(arr[m-1][i]);
    }
    m--;
    for(let i=m-1;i>=l;i--){
        console.log(arr[i][m]);
    }
    n--;
    for(let i=n-1;i>=k;i--){
        console.log(arr[l][i]);
    }
    l++;
    }
}

spiral(arr,m,n);