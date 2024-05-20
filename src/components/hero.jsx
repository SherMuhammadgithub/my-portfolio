"use strict";
import heroImage from "/public/me.png";
import Image from "next/image";

import { VscCallOutgoing } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";
export default function Hero() {
  // creating canvas animation
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let dots = [];

    const createDot = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 0.5)`,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      };
    };

    const drawDot = (dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
    };

    const updateDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.x > canvas.width || dot.x < 0) {
          dot.speedX *= -1;
        }
        if (dot.y > canvas.height || dot.y < 0) {
          dot.speedY *= -1;
        }

        drawDot(dot);
      });

      animationFrameId = requestAnimationFrame(updateDots);
    };

    const initializeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      for (let i = 0; i < 100; i++) {
        dots.push(createDot());
      }

      updateDots();
    };

    initializeCanvas();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const socialMediaIcons = [
    {
      icon: VscCallOutgoing,
      url: "#contact",
    },
    {
      icon: FaFacebook,
      url: "#facebook",
    },
    {
      icon: FaLinkedin,
      url: "#linkdin",
    },
  ];

  return (
    <main
      className={`hero-section  flex flex-col justify-center items-center bg-[#030313fc] text-white relative z-10 h-auto p-8  md:p-16 xl:p-24 overflow-auto"`}
    >
      <span id="page-intro"></span>
      <span textAnchor="middle" className="text-style hidden md:block">
        HI
      </span>

      {/* content */}
      <div className="flex flex-wrap items-center w-full mt-20 overflow-auto">
        <div className="col-1 flex flex-col justify-center items-center w-full md:w-1/2 ">
          <div className="hero-content space-y-6 ">
            <span className="text-2xl  lg:text-4xl font-semibold font-[Playball] tracking-widest">
              Sher Malik
            </span>
            <h1 className="hero-title font-bold text-4xl lg:text-7xl overflow-auto">
              Web Developer +
              <br />
              UX Designer
            </h1>
            {/* img in smaller screens */}
            <div className="flex justify-center items-center p-4 md:hidden">
              <Image
                src={heroImage}
                alt="Description of the image"
                width={300}
                height={300}
                className="rounded-[38px]  border-2 border-[#693dc3] rotate-[4.29deg] trasnform transition-all duration-300 ease-in-out hover:rotate-0 "
              />
            </div>

            <p className="max-w-[550px] w-full text-lg lg:text-[20px]">
              We break down complex user experinece problems to create
              integritiy focussed solutions that connect billions of people
            </p>
            <div className="button-box flex flex-wrap  items-center space-x-4">
              <button
                href="#"
                className=" w-full md:w-36 border border-[#693dc3]  bg-[#693dc3] rounded-xl   text-white py-3  text-sm md:text-lg hover:bg-transparent  transition-all duration-300 ease-in-out  "
              >
                Hire me
              </button>
            </div>
          </div>
        </div>
        <div className="col-2  w-1/2 md:flex justify-center items-center hidden ">
          <div className="hero-img-box p-4">
            <Image
              src={heroImage}
              alt="Description of the image"
              width={400}
              height={300}
              className="rounded-[38px]  border-2 border-[#693dc3] rotate-[4.29deg] trasnform transition-all duration-300 ease-in-out hover:rotate-0"
            />
          </div>
        </div>
      </div>
      <div className="hero-footer mt-10">
        <div className="social-media-icons flex justify-center items-center space-x-8 md:my-0">
          {socialMediaIcons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <a
                href={icon.url}
                key={index}
                className="text-white text-2xl hover:text-[#693dc3] transition-all duration-300 ease-in-out"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      {/* clients sections */}
      <div className="clients-section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-24 lg:gap-32 place-items-center mt-10">
        <div className="col-1 flex items-center space-x-4">
          <h1 className="text-2xl md:text-5xl font-bold ">03</h1>
          <p className="text-base md:text-xl">
            Years of <br /> Experience
          </p>
        </div>
        <div className="col-2 flex items-center space-x-4">
          <h1 className="text-2xl md:text-5xl font-bold ">10+</h1>
          <p className="text-base md:text-xl">
            Projects <br /> Completed
          </p>
        </div>
        <div className="col-3 flex items-center space-x-4">
          <h1 className="text-2xl md:text-5xl font-bold ">10+</h1>
          <p className="text-base md:text-xl">
            Happy <br /> Clients
          </p>
        </div>
        <div className="col-4 flex items-center space-x-4">
          <h1 className="text-2xl md:text-5xl font-bold ">03</h1>
          <p className="text-base md:text-xl">
            Years of <br /> Experience
          </p>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className=" absolute w-[100%] h-[50%] md:h-[100%] left-0 z-[-1]"
        id="dotsCanvas"
      ></canvas>
    </main>
  );
}
