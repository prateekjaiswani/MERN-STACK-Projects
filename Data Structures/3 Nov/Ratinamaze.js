// find the number of ways Rat can reach location
// if it can only move right and down

let arr = [
  [1,0,0,0],
  [1,1,0,0],
  [0,1,0,0],
  [1,1,1,1]
]

function Countways(i,j,maze,m,n){
   
  if(i>=m || j>=n){
    return 0;
  }
  if(maze[i][j]==0){
    return 0;
  }
  if(i==m-1,j==n-1){
    return 1;
  }

  let totalways= Countways(i+1,j,maze,m,n) + Countways(i,j+1,maze,m,n);
  
  return totalways;
  
}

console.log(Countways(0,0,arr,4,4));