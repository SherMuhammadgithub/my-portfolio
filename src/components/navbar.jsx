import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 text-white left-0 w-full p-6 md:p-8 md:px-16 z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? "bg-black shadow-lg shadow-indigo-500/50" : "bg-transparent"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="flex items-center justify-between w-full">
        <div className="header">
          <h1 className="text-3xl md:text-4xl font-bold overflow-hidden">
            CodeEz
          </h1>
        </div>
        <ul className="text-sm space-x-10 uppercase tracking-widest hidden lg:block">
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
        <div className="relative lg:inline-flex hidden items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 border-2 border-white text-white dark:text-white dark:hover:text-gray-200 dark:shadow-none group cursor-pointer">
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
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
            Contact
          </span>
        </div>
      </div>
      <div className="hamburger absolute right-4 top-[1.9rem] md:top-10 rotate-180 mx-10">
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-8 h-6">
            <span
              className={`block absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "top-2.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden fixed inset-y-0 left-0 w-64 bg-[#110818] text-white transform transition-transform duration-300 ease-in-out`}
      >
        <ul className="text-center space-y-10 mt-10">
          <li className="cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="Resume"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="testimonails"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              testimonails
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
