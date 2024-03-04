import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Homepage from "Routes/Homepage";
import Booking from "Routes/Booking";
import ConfirmedBooking from "Routes/ConfirmedBooking";
import ComingSoon from "Routes/ComingSoon";
import { MobileListener } from "MoblieListener";
import "./App.css";
import "variables/defaults.scss";

function App() {
  return (
    <>
      <Router>
        <MobileListener>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/confirmation" element={<ConfirmedBooking />} />
            <Route path="/order-online" element={<ComingSoon />} />
            <Route path="/menu" element={<ComingSoon />} />
          </Routes>
          <Footer />
        </MobileListener>
      </Router>
    </>
  );
}

export default App;
