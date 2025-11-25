import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Bot from "./pages/Bot";
import Player from "./pages/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
