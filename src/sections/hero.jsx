"use client";
import heroImage from "/public/hero.png";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import "./hero.css";
import Loader from "@/components/Loader";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true); // State for managing the loading status

  const socialMediaIcons = [
    {
      icon: FaGithubSquare,
      url: "https://github.com/SherMuhammadgithub",
      name: "SherMuhammadgithub",
    },
    {
      icon: FaFacebookSquare,
      url: "https://web.facebook.com/profile.php?id=100093945395084",
      name: "Sher Muhammad ",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sher-muhammad-448588290/",
      name: "Sher Muhammad",
    },
  ];

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

  return (
    <main
      id="home"
      className={`hero-section flex flex-col justify-center items-center bg-[#030313fc] text-white relative z-10 h-auto p-8 md:p-16 xl:p-24`}
    >
      <span id="page-intro"></span>
      <span className="text-style hidden md:block">HI</span>

      {/* content */}
      <div className="flex flex-wrap items-center w-full mt-20">
        <div className="col-1 flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="hero-content space-y-1">
            <span className="text-2xl lg:text-4xl font-semibold font-[Playball] tracking-widest">
              Sher Malik
            </span>
            <h1 className="hero-title font-bold text-4xl lg:text-7xl">
              Web Developer +
              <br />
              UX Designer
            </h1>

            {/* Loader and Image */}
            <div className="flex justify-center p-2 overflow-hidden md:hidden">
              {isLoading && <Loader />}
              <Image
                src={heroImage}
                alt="Description of the image"
                width={380}
                height={200}
                loading="lazy"
                className={`border-2 border-[#693dc3] items-center rounded-[38px] rotate-[4.29deg] transform transition-all duration-300 ease-in-out hover:rotate-0 ${
                  isLoading ? "hidden" : "block"
                }`}
                onLoad={() => setIsLoading(false)}
              />
            </div>

            <p className="max-w-[550px] w-full text-lg lg:text-[20px]">
              We break down complex user experience problems to create
              integrity-focused solutions that connect billions of people.
            </p>
            <div className="button-box pt-2 flex justify-center md:justify-start flex-wrap items-center gap-6 md:gap-10">
              <button
                href="#"
                className="w-full md:w-56 border border-[#693dc3] bg-[#693dc3] rounded-xl text-white py-3 px-6 text-sm md:text-lg hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Download CV
              </button>
              <div className="social-media-icons flex justify-center items-center gap-8 md:my-0">
                {socialMediaIcons.map((icon, index) => {
                  const Icon = icon.icon;
                  return (
                    <a
                      key={index}
                      href={icon.url}
                      className="group w-10 hover:w-44 h-10 hover:bg-[#030313fc] relative bg-[#693dc3] rounded-md text-neutral-50 duration-700 before:duration-700 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:bg-white before:hover:bg-[#030313fc]"
                    >
                      <Icon className="w-6 h-6 shrink-0 fill-neutral-50" />
                      <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm">
                        {icon.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 w-1/2 md:flex justify-center items-center hidden p-4">
          <div className="p-10">
            {isLoading && <Loader />}
            <Image
              src={heroImage}
              alt="Description of the image"
              width={380}
              height={350}
              loading="lazy"
              className={`border-2 border-[#693dc3] items-center rounded-[38px] rotate-[4.29deg] transform transition-all duration-300 ease-in-out hover:rotate-0 ${
                isLoading ? "hidden" : "block"
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
      <div className="hero-footer"></div>
      {/* clients sections */}
      <canvas
        ref={canvasRef}
        className="absolute w-[100%] h-[50%] md:h-[100%] left-0 z-[-1]"
        id="dotsCanvas"
      ></canvas>
    </main>
  );
}
