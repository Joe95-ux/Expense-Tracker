import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/hompage/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/Register";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faUser, faLock, faEnvelopeSquare);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
