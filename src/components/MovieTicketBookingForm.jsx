import React, { useState } from 'react';
import './MovieTicketBookingForm.css';
import Navbar from './Navbar';

const MovieTicketBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [numTickets, setNumTickets] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save user details to local storage
    localStorage.setItem('user', JSON.stringify(name, email,  numTickets));
    // Do further processing or API calls if needed
    alert(`Thank you ${name}, Your Ticket booked successfully!`);
    window.location.href = '/';
  };
  const movieString = localStorage.getItem('movie');
  const movie = JSON.parse(movieString);
  const movieName = movie.name; 

  return (
    <div>
      <Navbar />
      <div className="form">
        <div className="form-container">
          <h2>Movie Ticket Booking Form</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Movie:
              <select
                required
              >
                <option value={movieName}>{movieName}</option>
                
              </select>
            </label>
            <label>
              Number of Tickets:
              <input
                type="number"
                value={numTickets}
                onChange={(e) => setNumTickets(Number(e.target.value))}
                required
              />
            </label>
            <button type="submit">Book Tickets</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieTicketBookingForm;