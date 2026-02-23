const http=require('http');

http.createServer((req, res)=>{
    res.write("haaan hum response denge be"); // res.write("<h1>html</h1>") also
    res.end();
}).listen(4500); //takes function as a parameter

// or function bahar create krke call krna h createServer me
//  function display(req,res){
//     res.write("aaya uth pahad");
//     res.end();
// }
// http.createServer(display).listen(4500);

