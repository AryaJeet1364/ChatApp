import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
