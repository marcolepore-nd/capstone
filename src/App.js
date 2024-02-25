import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from 'Routes/Homepage';
import Booking from 'Routes/Booking';
import './App.css';
import 'variables/defaults.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
