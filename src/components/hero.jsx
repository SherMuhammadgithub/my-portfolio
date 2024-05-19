"use strict";
import React, { useState } from "react";
import heroImage from "/public/me.png";
import Image from "next/image";
import gsap from "gsap";
import { IoIosContact } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
export default function Hero() {
  const socialMediaIcons = [
    {
      icon: IoIosContact,
      url: "#contact",
    },
    {
      icon: FaFacebook,
      url: "#facebook",
    },
    {
      icon: TiSocialLinkedinCircular,
      url: "#linkdin",
    },
  ];

  return (
    <main
      className={`hero-section  flex flex-col justify-center items-center bg-[#030313fc] text-white relative z-10 p-8 md:p-16 xl:p-24 overflow-hidden"
      }`}
    >
      <span id="page-intro"></span>
      <span textAnchor="middle" className="text-style hidden md:block">
        HI
      </span>

      {/* content */}
      <div className="flex flex-wrap items-center w-full my-20">
        <div className="col-1 flex flex-col justify-center items-center w-full md:w-1/2 ">
          <div className="hero-content space-y-6 ">
            <span className="text-xl  lg:text-3xl font-semibold">CodeEz</span>
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
    </main>
  );
}
