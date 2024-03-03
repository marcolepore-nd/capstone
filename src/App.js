import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Homepage from 'Routes/Homepage';
import Booking from 'Routes/Booking';
import ConfirmedBooking from 'Routes/ConfirmedBooking';
import './App.css';
import 'variables/defaults.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/confirmation" element={<ConfirmedBooking />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
