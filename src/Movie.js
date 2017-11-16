import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({poster, title, genres, rating, synopsis}) {
    console.log(genres)
    return (
        <div className="movie_item">
            <div className="thumb">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="columns">
                <strong>{title}</strong>
                <div className="genrus">
                    {genres.map((genres, index) => <MovieGenres genres={genres} key={index} /> )}
                </div>
                <span className="rating">{rating}</span>
                <div className="synopsis">{synopsis}</div>
            </div>
        </div>
    )
}

function MoviePoster({poster,alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="poster"/>
    )
}

function MovieGenres({genres}) {
    return (
        <a href="#" className="genres">{genres}</a>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genres: PropTypes.string.isRequired
}

export default Movie;