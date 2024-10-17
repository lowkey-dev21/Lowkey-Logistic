import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Bookings, Home, Services, ContactUS, Fleets } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fleets" element={<Fleets />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="services" element={<Services />} />
          <Route path="contactUs" element={<ContactUS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
