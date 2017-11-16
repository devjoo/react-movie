import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: '토르: 라그나로크',
        poster: 'http://movie.phinf.naver.net/20170928_85/1506564710105ua5fS_PNG/movie_image.jpg?type=m99_141_2'
    },
    {
        title: '해피 데스데이',
        poster: 'http://movie.phinf.naver.net/20171030_113/15093310622251GtNg_JPEG/movie_image.jpg?type=m99_141_2'
    },
    {
        title: '부라더',
        poster: 'http://movie.phinf.naver.net/20170919_62/1505782593457htVeC_JPEG/movie_image.jpg?type=m99_141_2'
    },
    {
        title: '범죄도시',
        poster: 'http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg?type=m99_141_2'
    }
]

class App extends Component {
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {
        greeting: 'Hello!'
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                greeting: 'Hello again~!'
            })
        }, 5000)
    }

    render() {
        return (
            <div className="App">
                {this.state.greeting}
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index} />
                })}
            </div>
        );
    }
}

export default App;
