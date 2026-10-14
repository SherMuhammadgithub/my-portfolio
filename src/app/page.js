"use client";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";

import Services from "@/sections/Services";
import RecentWroks from "@/sections/RecentWroks";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
// Testimonials disabled until real client quotes replace the placeholder copy — see audit
// import Testimonials from "@/sections/Testimonials";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

// Set in <head> by layout.js before the first paint: "pending" means this
// document load shows the loader, anything else means it is already over.
const LOADER_ATTR = "data-portfolio-loader";
const LOADER_DURATION = 1000;

export default function Home() {
  // Starts true so the loader overlay — not the content — is what ends up in
  // the prerendered HTML and in the first paint.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    // Read-only check, so React StrictMode's second effect run behaves the same
    // as the first instead of short-circuiting on state it just wrote.
    if (root.getAttribute(LOADER_ATTR) !== "pending") {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      root.setAttribute(LOADER_ATTR, "done");
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // If arriving via a link like /#services (e.g. from the Contact page),
  // scroll to that section with the same navbar offset the in-page nav uses.
  useEffect(() => {
    if (isLoading) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }, [isLoading]);
  return (
    <>
      {isLoading && (
        <div
          data-portfolio-loader-overlay
          className="fixed inset-0 flex justify-center items-center bg-black z-[60]"
        >
          <Loader />
        </div>
      )}
      {/* Kept mounted while the loader is up: unmounting it collapsed the
          document to viewport height and the browser clamped the scroll
          position back to the top. */}
      <Navbar />
      <Hero />
      <Services />
      <RecentWroks />
      <Resume />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
