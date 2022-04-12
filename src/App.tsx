import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//screen
import Login from "./screens/Login";
import Home from "./screens/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
