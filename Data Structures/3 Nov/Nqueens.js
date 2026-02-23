// Place N queens on Board such that all cannot attack each other 
// make sure each row contains one queen
// n is arr length;

let board = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

let possibilities = [];

function Canput(){

}

function Putting(){

  if (i===n){
    possibilities.push(board);
  }


  if(Canput(i,j,board)){
    true
  }
  else{
    reset
  }


}