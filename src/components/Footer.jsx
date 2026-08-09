"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Projects" },
  { to: "Resume", label: "Resume" },
];

const SOCIAL_LINKS = [
  { icon: FaGithubSquare, url: "https://github.com/SherMuhammadgithub", name: "GitHub" },
  { icon: FaFacebookSquare, url: "https://web.facebook.com/profile.php?id=100093945395084", name: "Facebook" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sher-muhammad-448588290/", name: "LinkedIn" },
];

const CONTACT_EMAIL = "muhammadiqbalshermuhammad@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-[#050709] text-white pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10">
          {/* Brand */}
          <div className="max-w-sm space-y-4">
            {isHome ? (
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <span
                  className="text-2xl font-black italic leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SM
                </span>
                <span className="text-lg font-bold">Sher Muhammad</span>
              </ScrollLink>
            ) : (
              <NextLink href="/" className="inline-flex items-center gap-2">
                <span
                  className="text-2xl font-black italic leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SM
                </span>
                <span className="text-lg font-bold">Sher Muhammad</span>
              </NextLink>
            )}
            <p className="text-sm text-white/60 leading-relaxed">
              Full-stack developer specializing in real-time systems and AI
              integration — from enterprise streaming platforms to sub-800ms
              voice agents.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-[#a78bfa] hover:border-[#8c56fb] transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  {isHome ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="cursor-pointer text-white/70 hover:text-[#a78bfa] transition-colors"
                    >
                      {link.label}
                    </ScrollLink>
                  ) : (
                    <NextLink
                      href={`/#${link.to}`}
                      className="text-white/70 hover:text-[#a78bfa] transition-colors"
                    >
                      {link.label}
                    </NextLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 min-w-0 w-full md:w-auto">
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-widest">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-sm text-white/70">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-2 hover:text-[#a78bfa] transition-colors min-w-0"
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Lahore, Pakistan
              </div>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Let's work together`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
              }}
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/10"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-sm text-white/40">
          <p>&copy; {year} Sher Muhammad. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
