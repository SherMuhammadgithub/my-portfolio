"use client";
import { useState, useEffect } from "react";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";
import SplashScreen from "@/components/splashScreen";
import Services from "@/sections/Services";
import RecentWroks from "@/sections/RecentWroks";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <RecentWroks />
          <Resume />
          <Skills />
        </>
      )}
    </>
  );
}
