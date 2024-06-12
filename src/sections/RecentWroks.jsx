// components/RecentWorks.js
"use client";
import work1 from "/public/work-1.png";
import work2 from "/public/work-2.png";
import work3 from "/public/work-3.png";
import work4 from "/public/work-4.png";
import work5 from "/public/work-5.png";

import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import "./RecentWorks.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RecentWorks() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const cardsData = [
    {
      imgSrc: work1,
      title: "Xpense-Tracker App",
      tab: "UI/UX",
      description:
        "This is a simple expense tracker app that helps you to track your daily expenses and income. It is built using React.js, Tailwind CSS, Node and Sqlite.",
      link: "https://www.xpensetracker.live/",
    },
    {
      imgSrc: work2,
      title: "Image-Search App",
      tab: "App",
      description:
        "This is a simple image search app that helps you to search images from Unsplash API. It is built using Tailwind CSS.",
      link: "https://imgchinaedition.netlify.app/",
    },
    {
      imgSrc: work3,
      title: "my-potfolio-website",
      tab: "UI/UX",
      description:
        "This is a simple portfolio website that helps you to showcase my work and skills. It is built using Next.js and Tailwind CSS.",
      link: "http://shertec.me/company-portfolio/",
    },
    {
      imgSrc: work4,
      title: "Books-App",
      tab: "Branding",
      description:
        "This is a simple book app that helps you to buy different books. It is built using MERN stack.",
      link: "https://book-app-frontend-virid.vercel.app/",
    },
    {
      imgSrc: work1,
      title: "Xepnse-Tracker App",
      tab: "App",
      description:
        "This is a simple expense tracker app that helps you to track your daily expenses and income. It is built using React.js, Tailwind CSS, Node and Sqlite.",
      link: "https://www.xpensetracker.live/",
    },
    {
      imgSrc: work5,
      title: "Shoe Store App",
      tab: "Branding",
      description:
        "This is a simple shoe store app that helps you to buy shoes online. It is built using Tailwind CSS.",
      link: "http://shertec.me/TRENDY-THREDS-SHOES/",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetTab = (tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 300); // Transition duration should match the CSS transition duration
  };

  const filteredCards =
    activeTab === "tab1"
      ? cardsData
      : cardsData.filter((card) => card.tab === activeTab);

  return (
    <div
      id="portfolio"
      className="portfolio-section flex justify-center w-full p-4 md:py-16"
    >
      <span className="rounded-circle"></span>
      <div className="container" data-aos="fade-up">
        <div className="row flex flex-wrap my-2">
          <div className="col flex justify-center items-center w-full">
            <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-6">
              <h1 className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Quality Work
              </h1>
              <p className="text-base md:text-lg text-center text-white">
                Every project I create is a unique piece, crafted to bring your
                vision to life with innovative design and technology.
              </p>
            </div>
          </div>
        </div>

        {/* small tabs section */}
        <nav className="flex justify-center items-center space-x-2">
          <ul className="bg-black w-full md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] p-4 z-10 text-white flex justify-center items-center gap-2 md:gap-10 rounded-md mt-2">
            <div
              className={`item01 cursor-pointer ${
                activeTab === "tab1" ? "bg-[#693dc3]" : ""
              } transition-all duration-300 p-2 rounded-3xl`}
              onClick={() => handleSetTab("tab1")}
            >
              ALL
            </div>
            <div
              className={`item01 cursor-pointer ${
                activeTab === "UI/UX" ? "bg-[#693dc3]" : ""
              } transition-all duration-300 p-2 rounded-3xl`}
              onClick={() => handleSetTab("UI/UX")}
            >
              UX/UI
            </div>
            <div
              className={`item01 cursor-pointer ${
                activeTab === "Branding" ? "bg-[#693dc3]" : ""
              } transition-all duration-300 p-2 rounded-3xl`}
              onClick={() => handleSetTab("Branding")}
            >
              Branding
            </div>
            <div
              className={`item01 cursor-pointer ${
                activeTab === "App" ? "bg-[#693dc3]" : ""
              } transition-all duration-300 p-2 rounded-3xl`}
              onClick={() => handleSetTab("App")}
            >
              App
            </div>
          </ul>
        </nav>

        {/* cards section here */}
        <div
          className={`cards flex justify-center items-center flex-wrap w-full gap-10 z-10 my-10 px-4 ${
            isTransitioning
              ? ""
              : activeTab === "tab1"
              ? "card-ALL"
              : activeTab === "UI/UX"
              ? "card-UI-UX"
              : activeTab === "Branding"
              ? "card-Branding"
              : activeTab === "App"
              ? "card-App"
              : ""
          }`}
        >
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              tab={card.tab}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
