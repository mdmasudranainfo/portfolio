import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Skill from "../Skill/Skill";

const Main = () => {
  const [data, setData] = useState([]);
  let stor = localStorage.getItem("mode");
  if (stor === "false") {
    stor = false;
  } else {
    stor = true;
  }

  const [dark, setDark] = useState(stor);
  localStorage.setItem("mode", dark);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Navbar dark={dark} setDark={setDark}></Navbar>
      <Home></Home>
      <Modal data={data}></Modal>
      <About></About>
      <Skill></Skill>
      <Portfolio setData={setData}></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Main;
