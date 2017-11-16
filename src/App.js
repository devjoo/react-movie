import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount(){
        this._getMovies()
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies : movies
        })
    };

    _callApi = () => {
        return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    };

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            console.log(movie)
            return <Movie
                title={movie.title_english}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                synopsis={movie.synopsis}
                key={movie.id}
            />
        });
        return movies
    };

    render() {
        const { movies } = this.state;
        return (
            <div className={movies ? 'app' : 'app-loading' }>
                {movies ? this._renderMovies() : 'loading...'}
            </div>
        );
    }
}

export default App;
