const { getAllMovies, getAllMoviesbasedOnID, createMovie, updateMovie } = require("../controllers/movie.controller");
const { validateMovieReqBody } = require("../middleware");


module.exports = (app) => {
    app.get('/mba/api/v1/movies', getAllMovies );
    app.get('/mba/api/v1/movies/:id', getAllMoviesbasedOnID );
    app.post('/mba/api/v1/movies', validateMovieReqBody , createMovie);
    app.put('/mba/api/v1/movies/:id', validateMovieReqBody , updateMovie );
    app.delete('/mba/api/v1/movies', validateMovieReqBody , deleteMovie );
} 