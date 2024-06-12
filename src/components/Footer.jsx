import React from "react";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <section className="bg-[#110818] text-white p-10 flex justify-center items-center">
      <div className="containe space-y-6">
        <div className="header text-center">
          <h1 className="text-3xl md:text-4xl font-bold">CodeEz</h1>
        </div>
        <div className="links">
          <ul className="text-sm font-semibold flex flex-wrap justify-center items-center uppercase tracking-widest gap-6">
            <li className="inline-block cursor-pointer ">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link to="Resume" smooth={true} duration={500}>
                Resume
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link to="skills" smooth={true} duration={500}>
                skills
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link to="testimonails" smooth={true} duration={500}>
                testimonails
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer text-center text-sm text-[#693dc3]">
          <p>&copy; 2024 All rights reserved by CodeEz</p>
        </div>
      </div>
    </section>
  );
}
