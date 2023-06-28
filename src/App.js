import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieSummary from './components/MovieSummary';
import TicketBooking from './components/TicketBooking ';
import MovieList from './components/MovieList';

function App() {
  return (
  <>
      <Router>
      <div>
        <Routes>
          <Route exact path="/movies/:id" element={<MovieSummary />} />
          <Route exact path="/booking" element={<TicketBooking />} />
          <Route exact path="/" element={<MovieList />} />
          </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
