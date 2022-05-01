import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path ='/' element={<Home></Home>}></Route>
        <Route  path ='/home' element={<Home></Home>}></Route>
        <Route  path ='/login' element={<Login></Login>}></Route>
        <Route  path ='/register' element={<Register></Register>}></Route>
        <Route  path ='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </>
  );
}

export default App;
