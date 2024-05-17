"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll); // listen for scroll events

    return () => window.removeEventListener("scroll", handleScroll); // remove listener when component unmounts
  }, []);

  const navbarClasses = `fixed top-0 text-white left-0 w-full py-8 px-10 z-50 transition-all duration-300 ease-in-out    ${
    isScrolled ? "shadow-lg shadow-indigo-500/50" : "bg-transparent"
  }`;
  return (
    <nav className={navbarClasses}>
      <div className="flex  items-center justify-between  w-full">
        <div className="heaeder">
          <h1 className="text-4xl font-bold overflow-hidden ">CodeEz</h1>
        </div>
        <ul className=" text-base space-x-10 uppercase tracking-widest hidden lg:block">
          <li className="inline-block ">
            <a href="#about">About</a>
          </li>
          <li className="inline-block">
            <a href="#services">Services</a>
          </li>
          <li className="inline-block">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="inline-block">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="relative  lg:inline-flex  hidden items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 border-2 border-white text-white  dark:text-white dark:hover:text-gray-200 dark:shadow-none group cursor-pointer">
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#693dc3] group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 text-green-400"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 text-green-400"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 ">
            Contact
          </span>
        </div>
      </div>
      <div className="hamburger absolute right-4 top-10 mx-10">
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-8 h-8 text-white"
          >
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      {/* sm-navbar */}

      <div
        className={`${
          isMenuOpen ? "h-96" : "h-0"
        } lg:hidden flex justify-center items-center text-white w-full  backdrop-blur-xl bg-white/30  transform transition-all duration-500 rounded-md`}
      >
        <ul className="text-center space-y-10">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
