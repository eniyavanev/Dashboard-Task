import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Mainbody from "./Components/Mainbody/Mainbody";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainbody />} >
        <Route path="/" element = {<Dashboard/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
