import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginLanding from "./Pages/Login/LoginLanding";
import Login from "./Pages/Login/Login";
import VerifyOtp from "./Pages/Login/VerifyOtp";
import StoreLanding from "./Pages/Store/StoreLanding";
import Store from "./Pages/Store/Store";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/loginLanding" element={<LoginLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/VerifyOtp" element={<VerifyOtp />} />
          <Route path="/StoreLanding" element={<StoreLanding />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
