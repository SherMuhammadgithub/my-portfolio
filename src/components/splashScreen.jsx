import React, { useEffect } from "react";
import { SiGamedeveloper } from "react-icons/si";
import gsap from "gsap";
export default function SplashScreen() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".loader", {
      rotate: 360,
      scale: 2.5,
    })
      .to(".loader", {
        // make the loader disappear
        duration: 1,
        scale: 3.5,
        ease: "power2.inOut",
      })
      .to(".screen", {
        delay: 0.5,
        duration: 1,
        opacity: 0,
        transformOrigin: "top",
        ease: "power2.inOut",
      });
  }, []);
  return (
    <div className="screen bg-black h-screen w-full flex justify-center items-center text-[#693dc3]">
      <span className="loader">
        <SiGamedeveloper className="  animate-pulse w-20 h-20" />
      </span>
    </div>
  );
}
