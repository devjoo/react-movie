import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    // Render : componentWillMount() -> render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: '토르: 라그나로크',
                        poster: 'http://movie.phinf.naver.net/20170928_85/1506564710105ua5fS_PNG/movie_image.jpg?type=f125'
                    },
                    {
                        title: '해피 데스데이',
                        poster: 'http://movie.phinf.naver.net/20171030_113/15093310622251GtNg_JPEG/movie_image.jpg?type=f125'
                    },
                    {
                        title: '부라더',
                        poster: 'http://movie.phinf.naver.net/20170919_62/1505782593457htVeC_JPEG/movie_image.jpg?type=f125'
                    },
                    {
                        title: '범죄도시',
                        poster: 'http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg?type=f125'
                    },
                    {
                        title: '러빙 빈센트',
                        poster: 'http://movie2.phinf.naver.net/20171013_210/1507861351048TMJcR_JPEG/movie_image.jpg?type=f125'
                    },
                    //...this.state.movies      // 앞에 추가
                ]
            })
        }, 3000)
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        });
        return movies
    };

    render() {
        return (
            <div className="App">
                {this.state.movies ? this._renderMovies() : 'loading...'}
            </div>
        );
    }
}

export default App;
