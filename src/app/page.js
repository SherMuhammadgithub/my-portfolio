"use client";
import Hero from "@/sections/hero";
import Navbar from "@/components/navbar";

import Services from "@/sections/Services";
import RecentWroks from "@/sections/RecentWroks";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <>
        <Navbar />
        <Hero />
        <Services />
        <RecentWroks />
        <Resume />
        <Skills />
        <Testimonials />
      </>
    </>
  );
}
