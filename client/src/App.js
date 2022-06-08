import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
// import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginuser from "./Loginuser";
// import Signin from "./Signin";
import Register from "./Register";
// import Home from "./Home";
import Users from "./Users";
import Userform from "./Userform";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Loginuser />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/userlogin" element={<Userform />} />
         <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}
// code ? <Dashboard code={code} /> : <Login />
export default App;
