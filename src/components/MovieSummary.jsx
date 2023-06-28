import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './MovieSummary.css'
import loading from './Loading.gif'

const MovieSummary = ({history}) => {
    const { id } = useParams(); // Access the id from the URL
    const [movie, setMovie] = useState();
    
    useEffect(() => {
        // Fetch movie summary from API
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    const handleBookTicket = () => {
        // Save movie details to local storage
        localStorage.setItem('movie', JSON.stringify(movie));
        
       
    };

    if (!movie) {
        return  <div className='spinner'>
            <img src={loading} alt="Loading" />
      </div>;
      
    }
    return (
        <div>
            <Navbar />

            <div className="details">
                <div className="banner-img">
                    {movie.image && movie.image.original && (
                        <img src={movie.image.original} alt={movie.name} />
                    )}
                </div>
                <div className="movie-name">
                    <h1>{movie.name}</h1>
                </div>
            </div>
            <div className="summary">
                <h1 className="summary-heading">Summary</h1>
                <p className="full-summary">{movie.summary}</p>
            </div>
            <div className="btn">
                <Link to = '/booking' className='btn-btn' onClick={handleBookTicket}>Book Ticket</Link>
            </div>
        </div>
    );
};

export default MovieSummary;