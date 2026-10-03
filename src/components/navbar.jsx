"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Projects" },
  { to: "Resume", label: "Resume" },
];

const CONTACT_EMAIL = "muhammadiqbalshermuhammad@gmail.com";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 transition-all duration-300 ease-in-out ${
    isScrolled
      ? "bg-black/90 backdrop-blur-sm shadow-lg shadow-black/40"
      : "bg-transparent"
  }`;

  const desktopLinkClass = (section) =>
    `relative inline-block pb-2 cursor-pointer transition-colors duration-200 after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:bg-[#a78bfa] after:rounded-full after:transition-all after:duration-300 ${
      activeSection === section
        ? "text-[#a78bfa] after:w-full"
        : "text-white/90 hover:text-white after:w-0"
    }`;

  return (
    <>
    <nav className={navbarClasses}>
      <div className="flex items-center justify-between w-full text-white">
        {/* Logo (left) */}
        {isHome ? (
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <span
              className="inline-flex min-w-[3.25rem] items-center justify-center text-3xl md:text-4xl font-black leading-normal tracking-tight shrink-0"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SM
            </span>
          </ScrollLink>
        ) : (
          <NextLink
            href="/"
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <span
              className="inline-flex min-w-[3.25rem] items-center justify-center text-3xl md:text-4xl font-black leading-normal tracking-tight shrink-0"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SM
            </span>
          </NextLink>
        )}

        {/* Right-side cluster: nav links + Hire Me grouped together, like the mockup */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-base font-medium">
            {NAV_LINKS.map((link) =>
              isHome ? (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    spy={true}
                    onSetActive={() => setActiveSection(link.to)}
                    className={desktopLinkClass(link.to)}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link.to}>
                  <NextLink
                    href={`/#${link.to}`}
                    className="text-white/90 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </NextLink>
                </li>
              )
            )}
          </ul>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Let's work together`}
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 shrink-0"
            style={{
              background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
              borderRadius: "10px",
            }}
          >
            Hire Me
          </a>
        </div>

          <button
            className="lg:hidden relative w-8 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "top-2.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            ></span>
          </button>
      </div>
    </nav>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 z-[90]"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden fixed inset-y-0 left-0 w-64 bg-[#110818] text-white transform transition-transform duration-300 ease-in-out z-[95]`}
      >
        <ul className="text-center space-y-8 mt-24">
          {NAV_LINKS.map((link) =>
            isHome ? (
              <li key={link.to} className="cursor-pointer">
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.to}>
                <NextLink
                  href={`/#${link.to}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </NextLink>
              </li>
            )
          )}
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Let's work together`}
              onClick={() => setIsMenuOpen(false)}
              className="inline-block mt-2 px-6 py-2.5 text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
                borderRadius: "10px",
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
