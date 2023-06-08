import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Signin from "./Views/Signin";
import Search from "./Views/Search";
import About from "./Views/About";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    joinedProtests: []
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userData={userData} setUserData={setUserData}/>} />
        <Route path="/search" element={<Search userData={userData} setUserData={setUserData}/>} />
        <Route path="/signin" element={<Signin setUserData={setUserData}/>} />
        <Route path="/about" element={<About userData={userData} setUserData={setUserData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;