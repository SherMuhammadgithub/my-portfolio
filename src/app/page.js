"use client";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";

import Services from "@/sections/Services";
import RecentWroks from "@/sections/RecentWroks";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials";
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
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}
