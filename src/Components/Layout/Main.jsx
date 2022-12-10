import React from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/skill">Skill</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img
                className="w-[50px]"
                src="https://i.ibb.co/p1m1pjY/logo-Masud-baiya.png"
                alt=""
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{menuItems}</ul>
            </div>
          </div>

          <div className="grid grid-cols-3 justify-between">
            <div className="bg-prinary ">
              <img
                className="w-full"
                src="https://i.ibb.co/XtvVkL4/f8d4f317-1494-47e4-844d-1aaf87d469c1-1.png"
                alt=""
              />
            </div>
            <div className=" col-span-2">
              <Outlet />
              <Toaster />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
