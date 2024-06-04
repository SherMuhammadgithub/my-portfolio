"use client";
import React, { useState } from "react";
import "./hero.css";

export default function Services() {
  const [topCount, setTopCount] = useState(0);
  const servicesData = [
    {
      count: "01",
      title: "Web Developer",
      description:
        "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    },
    {
      count: "02",
      title: "UX Designer",
      description:
        "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    },
    {
      count: "03",
      title: "App Developer",
      description:
        "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    },
  ];

  return (
    <section className="py-4 md:py-32 bg-[#050709] text-white">
      <div className="container">
        <div className="row flex flex-wrap my-2">
          <div className="col flex justify-center items-center w-full">
            <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-6">
              <h1 className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Quality Services
              </h1>
              <p className="text-base md:text-lg text-center">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap mx-4 lg:mx-56 my-10">
          <div className="col flex justify-center items-center w-full">
            <div className="services-widget relative">
              {servicesData.map((service, index) => (
                <div
                  key={service.count}
                  className="service-item border-b border-[#281351] p-6 md:p-10 flex flex-col md:flex-row justify-center items-center md:space-x-2 md:space-y-0 w-full space-y-3 space-x-0"
                  onMouseEnter={() => setTopCount(index * 129)} // Adjust multiplier as needed lg-12
                >
                  <div className="left flex items-center space-x-4 w-full lg:w-1/2">
                    <span className="font-bold text-[#693dc3] text-2xl">
                      {service.count}
                    </span>
                    <h1 className="font-bold md:text-3xl text-xl">
                      {service.title}
                    </h1>
                  </div>
                  <div className="right">
                    <p className="md:text-base text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
              <div
                className="hover-effect hidden lg:block md:h-[120px] h-[130px] bg-[#8c56fb] left-0 right-0 z-[1] transition-all duration-500"
                style={{ top: `${topCount}px` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
