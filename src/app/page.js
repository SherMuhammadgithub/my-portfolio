"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import SplashScreen from "@/components/splashScreen";
import gsap from "gsap";

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
          <Projects />
        </>
      )}
    </>
  );
}
