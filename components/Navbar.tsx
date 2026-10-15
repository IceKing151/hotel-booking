import React from "react";
import logo from "../src/assets/logo.svg";
import user from "../src/assets/userIcon.svg";
import search from "../src/assets/searchIcon.svg";

const Navbar = () => {
  return (
    <nav className="flex py-5 items-center justify-center">
      <img src={logo} alt="logo" className="w-[10vw] h-[8vh]" />  

      <ul className="flex list-none gap-6 mx-70 text-white">
        <li>Home</li>
        <li>Hotels</li>
        <li>Experiences</li>
        <li>About</li>
      </ul>

      <img src={search} alt="search-icon" className="w-[5vw] h-[4vh]"/>  
      <img src={user} alt="user-icon" className="w-[5vw] h-[4vh]"/>

      <button type="button" className="bg-black w-[8vw] p-2 text-white rounded-full">Login</button>
    </nav>
  );
};

export default Navbar;
