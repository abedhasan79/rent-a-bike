import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary px-3 sticky-top" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Bike Rental</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/bikes">Bikes</Link> */}
                  <Link className="nav-link" to="/book">Book Now</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/bikes" element={<BikeList />} /> */}
          <Route path="/book" element={<BookingPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
