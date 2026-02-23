

// console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

// console.log(process.env.PORT);

module.exports = {
    PORT: process.env.PORT
}