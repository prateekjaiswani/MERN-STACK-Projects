const http=require('http');
const data=require('./data.js')


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    //HEADER is IMportant in API , also why 200?
    //500-internal server error,404 - not found
    //201-created ..status 
    // res.write(JSON.stringify({
    //     name: 'Prateek Jaiswani',email: 'prateekjaizz@gmail.com'}));
    res.write(JSON.stringify(data))    //also can add by different file
    res.end();
}).listen(7000);

//postman extension is faadu for running and checking apis.