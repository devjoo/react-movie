import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
}

function Movie({poster, title}) {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="" />
    )
}

export default Movie;