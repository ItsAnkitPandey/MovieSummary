import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import noimg from "../noimg.jpg"


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from API
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);
    
    return (
        <div >
            <Navbar />
            <div className="cards">
                {movies.map(movie => (
                    <div key={movie.show.id} className='container'>
                        <div class="wrapper">
                            {(movie.show.image && movie.show.image.original) ? (
                                <img src= {movie.show.image.original} alt={movie.show.name} />
                            ) : ( <img src= {noimg} alt={movie.show.name} />)}
                        

                            <h1 className='name'>{movie.show.name}</h1>

                        </div>
                        <div class="button-wrapper">
                            <Link to={`/movies/${movie.show.id}`} className="btn outline">View Summary</Link>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MovieList