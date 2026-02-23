// download xampp it contains everything // npm i mysql
// in phpmyadmin we will work -> test
// fetch table creators from test

const mysql = require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"test"
});

//for connection
con.connect((err)=>{
    if(err){
        console.log("error bro");
    }
    else{
        console.log("connect hogya bro")
    }
})


//for any query
con.query("select * from creators",(err,result)=>{
    console.log("result",result)
})

//api se sab same h query likhte h bus 
// {} keys deni pdegi
// [] bina keys ke hojaega   x  