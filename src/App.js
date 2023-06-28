import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieSummary from './components/MovieSummary';
import MovieList from './components/MovieList';
import MovieTicketBookingForm from './components/MovieTicketBookingForm';

function App() {
  return (
  <>
      <Router>
      <div>
        <Routes>
          <Route exact path="/movies/:id" element={<MovieSummary />} />
          <Route exact path="/booking" element={<MovieTicketBookingForm />} />
          <Route exact path="/" element={<MovieList />} />
          </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
