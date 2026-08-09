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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // You can adjust the delay as needed

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
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <RecentWroks />
          <Resume />
          <Skills />
          {/* <Testimonials /> */}
          <Footer />
        </>
      )}
    </>
  );
}
