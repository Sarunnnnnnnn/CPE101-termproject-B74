import { Route, Routes } from "react-router";
import React from "react";

import Home from "./pages/home/Home";
import Res1 from "./pages/reservation/reservation_1/Res1";
import Res2 from "./pages/reservation/reservation_2/Res2";
import Res3 from "./pages/reservation/reservation_3/Res3";
import Navbar from "./Components/navbar/navbar/navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Res1 />} />
        <Route path="/reservation-info" element={<Res2 />} />
        <Route path="/reservation-confirm" element={<Res3 />} />
      </Routes>
    </div>
  );
}
export default App;
