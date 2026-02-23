const Movie = require('../models/movies.models.js');

async function getAllMovies(req,res){

        const reqObject = {};

        if(req.query.name){
            reqObject.name = req.query.name;
        }


        const result = await Movie.find(reqObject);
        res.send(result);
}
async function getAllMoviesbasedOnID(req,res){

        const result = await Movie.find({_id:req.params.id});
        res.send(result);
}

async function createMovie(req,res){
    let temp = {
        name: req.body.name,
        description: req.body.description,
        casts: req.body.casts,
        director: req.body.director,
        trailerUrl: req.body.trailerUrl,
        posterUrl: req.body.posterUrl,
        language: req.body.language,
        releaseDate: req.body.releaseDate,
        releaseStatus: req.body.releaseStatus
    }

    const movie = await Movie.create(temp);
    res.status(201).send(movie);
}

const updateMovie=async(req,res)=>{
    const saved =Movie.findOne({
        _id:req.params.id
    })

    if(!saved){
        return res.status(400).send({
            msg: "id npt found"
        })
    }

    saved.name = req.body.name ? req.body.name : saved.name
    saved.description = req.body.description ? req.body.description : saved.description;
    saved.casts = req.body.casts ? req.body.casts : saved.casts;
    saved.director = req.body.director ? req.body.director : saved.director;
    saved.trailerUrl = req.body.trailerUrl ? req.body.trailerUrl : saved.trailerUrl;
    savedMovie.posterUrl = req.body.posterUrl != undefined ? req.body.posterUrl : savedMovie.posterUrl;
    savedMovie.language = req.body.language != undefined ? req.body.language : savedMovie.language;
    savedMovie.releaseDate = req.body.releaseDate != undefined ? req.body.releaseDate : savedMovie.releaseDate;
    savedMovie.releaseSatus = req.body.releaseSatus != undefined ? req.body.releaseSatus : savedMovie.releaseSatus;

    var updatedMovie = await savedMovie.save();

    res.status(200).send(updatedMovie);
}

module.exports = {
    getAllMovies,
    getAllMoviesbasedOnID,
    createMovie,
    updateMovie
}