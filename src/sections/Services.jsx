"use client";
import React from "react";
import "./hero.css";

export default function Services() {
  return (
    <section className="py-4 md:py-32 bg-[#050709] text-white ">
      <div className="container">
        <div className="row flex flex-wrap my-2">
          <div className="col flex justify-center items-center w-full">
            <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-6">
              <h1 className="hero-title font-bold text-4xl md:text-[45px] ">
                My Quality Services
              </h1>
              <p className="text-base md:text-lg text-center">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap mx-4 lg:mx-56">
          <div className="col flex justify-center items-center w-full ">
            <div className="services-widget relative">
              {/* <div className="service-item border-b border-[#281351] flex flex-wrap items-center relative z-2 gap-5 px-[30px] mx-56">
                <div className="left-box flex items-center gap-10">
                  <span>01</span>
                  <h3>Branding Design</h3>
                </div>
                <div className="rights-box flex">
                  <p>
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </p>
                </div>
              </div> */}
              <div className="service-item border-b border-[#281351] p-6 md:p-10 flex flex-col md:flex-row justify-center items-center md:space-x-2 md:space-y-0 w-full space-y-3 space-x-0">
                <div className="left flex  items-center space-x-4 w-full lg:w-1/2 ">
                  <span className="font-bold">01</span>
                  <h1 className="font-bold md:text-3xl text-xl">
                    Web Developer
                  </h1>
                </div>
                <div className="right ">
                  <p className="md:text-base text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet, ut? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
