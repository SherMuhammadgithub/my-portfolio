"use client";
import heroImage from "/public/hero.png";
import resume from "/public/resume.pdf";
import Image from "next/image";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Download, Code2, Briefcase, Users, Layers } from "lucide-react";
import { useEffect, useRef } from "react";
import "./hero.css";

const SOCIAL_LINKS = [
  {
    icon: FaGithubSquare,
    url: "https://github.com/SherMuhammadgithub",
    name: "GitHub",
  },
  {
    icon: FaFacebookSquare,
    url: "https://web.facebook.com/profile.php?id=100093945395084",
    name: "Facebook",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/sher-muhammad-448588290/",
    name: "LinkedIn",
  },
];

const STATS = [
  { icon: Code2, value: "2+", label: "Years Experience" },
  { icon: Briefcase, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "3+", label: "Happy Clients" },
  { icon: Layers, value: "10+", label: "Technologies" },
];

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

  return (
    <main
      id="home"
      className={`hero-section flex flex-col justify-center items-center bg-[#030313fc] text-white relative z-10 h-auto p-8 md:p-16 xl:p-24 overflow-hidden`}
    >
      <span id="page-intro"></span>
      {/* content */}
      <div className="flex flex-wrap items-center w-full max-w-6xl mx-auto mt-20 gap-x-16 lg:gap-x-28 gap-y-12">
        <div className="col-1 flex flex-col justify-center items-center w-full md:flex-1 md:min-w-0">
          <div className="hero-content space-y-4 w-full">
            <div className="space-y-1">
              <span className="block text-xl lg:text-2xl font-semibold font-[Playball] tracking-widest text-[#a78bfa]">
                Sher Muhammad
              </span>
              <h1 className="font-bold text-4xl lg:text-7xl text-white">
                Web Developer <span className="text-[#8c56fb]">+</span>
                <br />
                <span className="text-[#a78bfa]">UX Designer</span>
              </h1>
            </div>

            {/* Loader and Image (mobile) */}
            <div className="flex justify-center p-4 md:hidden">
              <div className="relative w-[220px] h-[220px] rounded-[32px] border-2 border-[#693dc3] overflow-hidden rotate-[4.29deg] transform transition-all duration-300 ease-in-out hover:rotate-0">
                <Image
                  src={heroImage}
                  alt="Sher Muhammad Iqbal"
                  fill
                  sizes="220px"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <p className="max-w-[550px] w-full text-lg lg:text-[20px] text-white/80">
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people.
            </p>

            <div className="button-box pt-2 flex justify-center md:justify-start flex-wrap items-center gap-6 md:gap-10">
              <a
                href={resume}
                download="Sher_Muhammad_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 w-full md:w-56 border border-[#693dc3] bg-[#693dc3] rounded-xl text-white py-3 px-6 text-sm md:text-lg hover:bg-transparent transition-all duration-500 ease-in-out hover:text-[#693dc3]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <div className="social-media-icons flex justify-center items-center gap-3 md:my-0">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-[#a78bfa] hover:border-[#8c56fb] transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 md:flex justify-center items-center hidden shrink-0 p-6">
          <div className="relative w-[300px] h-[300px] xl:w-[340px] xl:h-[340px] rounded-[38px] border-2 border-[#693dc3] overflow-hidden rotate-[4.29deg] transform transition-all duration-300 ease-in-out hover:rotate-0 shadow-2xl shadow-black/40">
            <Image
              src={heroImage}
              alt="Sher Muhammad Iqbal"
              fill
              sizes="(min-width: 1280px) 340px, 300px"
              placeholder="blur"
              loading="lazy"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Stats row: full width, below both columns */}
      <div className="w-full max-w-6xl mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 md:px-8 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 md:px-4 md:first:pl-0"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#693dc3]/20 flex items-center justify-center text-[#a78bfa]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute w-[100%] h-[50%] md:h-[100%] left-0 z-[-1]"
        id="dotsCanvas"
      ></canvas>
    </main>
  );
}
