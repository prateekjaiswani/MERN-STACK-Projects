const express = require('express');
const mongoose=require('mongoose');
require('./models/movies.models.js');
const bodyparser = require('body-parser');

const app = express();

const {PORT} = require('./configs/server.config.js');
const {DBurl} = require('./configs/db.config.js');
const Movie = require('./models/movies.models');
// console.log(PORT);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//IIFE

(async ()=>{
    await mongoose.connect(DBurl);
    console.log(`Db Connected`);
    // await init();
})();


async function init(){

    try{
        await Movie.collection.drop();
        await Movie.create({
            name: "Bachhan Pandey",
            description: "Comedy Masala Movie",
            casts: ["Akshay Kumar", "Jacqueline Fernandiz"],
            director: "Farhad Samji",
            trailerUrl: "http://bacchanpandey/trailers/1",
            posterUrl: "http://bacchanpandey/posters/1",
            language: "Hindi",
            releaseDate: "18-03-2022",
            releaseStatus: "RELEASED"
        });
        await Movie.create({
            name: "Jalsa",
            description: "Intense Drama Movie",
            casts: ["Vidya Balan", "Shefali Shah"],
            director: "Suresh Triveni",
            trailerUrl: "http://jalsa/trailers/1",
            posterUrl: "http://jalsa/posters/1",
            language: "Hindi",
            releaseDate: "18-03-2022",
            releaseStatus: "RELEASED"
        });
        await Movie.create({
            name: "Jhund",
            description: "Comedy Drama Movie",
            casts: ["Amitabh Bachchan", "Abhinay Raj"],
            director: "Nagraj Manjule",
            trailerUrl: "http://jhund/trailers/1",
            posterUrl: "http://jhund/posters/1",
            language: "Hindi",
            releaseDate: "04-03-2022",
            releaseStatus: "RELEASED"
        });
        await Movie.create({
            name: "Radhe Shyam",
            description: "Comedy Drama Movie",
            casts: ["Prabhas", "Pooja Hegde"],
            director: "Radha Krishna Kumar",
            trailerUrl: "http://RadheShyam/trailers/1",
            posterUrl: "http://RadheShyam/posters/1",
            language: "Hindi",
            releaseDate: "11-03-2022",
            releaseStatus: "RELEASED"
        });
        await Movie.create({
            name: "The Kashmir Files",
            description: "Intense Movie",
            casts: ["Mithun Chakraborty", "Anupam Kher"],
            director: "Vivek Agnihotri",
            trailerUrl: "http://TheKashmirFiles/trailers/1",
            posterUrl: "http://TheKashmirFiles/posters/1",
            language: "Hindi",
            releaseDate: "11-03-2022",
            releaseStatus: "RELEASED"
        });

        console.log("Movies inserted in the db");

    } 
    catch(err){
        console.log("error adding default entries",err);
    }
    
}


//call  routes

require('./routes/movie.routes')(app);

app.listen(PORT, ()=>{ 
    console.log(`server running in  ${PORT}`)
})