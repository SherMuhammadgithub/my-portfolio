import React from "react";
import heroImage from "/public/me.png";
import Image from "next/image";
import { AiFillAmazonSquare } from "react-icons/ai";
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
    <main className="h-screen flex flex-col justify-center items-center bg-[#030313fc] text-white relative z-10 px-10 md:px-16 xl:px-24 overflow-hidden">
      <span id="page-intro"></span>
      <span textAnchor="middle" className="text-style hidden md:block">
        HI
      </span>

      {/* content */}
      <div className="flex flex-wrap items-center w-full mt-20 ">
        <div className="col-1 flex flex-col justify-center items-center w-full md:w-1/2  ">
          <div className="hero-content space-y-6 ">
            <span className="text-xl  lg:text-3xl font-semibold">CodeEz</span>
            <h1 className="hero-title font-bold text-4xl lg:text-7xl overflow-hidden">
              Web Developer +
              <br />
              UX Designer
            </h1>
            {/* img in smaller screens */}
            <div className="flex justify-center items-center p-4 md:hidden">
              <Image
                src={heroImage}
                alt="Description of the image"
                width={300} // Width of the image
                height={300} // Height of the image
                className="rounded-[38px]  border-2 border-[#693dc3] rotate-[4.29deg] trasnform transition-all duration-300 ease-in-out hover:rotate-0 "
              />
            </div>

            <p className="max-w-[550px] w-full text-lg lg:text-[20px]">
              We break down complex user experinece problems to create
              integritiy focussed solutions that connect billions of people
            </p>
            <div className="button-box flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
              <a
                href="#"
                className="border-2 border-[#693dc3] rounded-md bg-transparent text-white py-2 px-4 text-sm md:text-lg hover:bg-[#693dc3]  transition-all duration-300 ease-in-out"
              >
                Contact US &
              </a>
              <div className="social-media flex items-center space-x-4">
                {socialMediaIcons.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="w-10 aspect-square flex justify-center items-center rounded-full border-2 border-[#693dc3] hover:bg-[#693dc3] transform transition-all duration-300 ease-in-out "
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="  w-1/2 md:flex justify-center items-center hidden ">
          <div className="hero-img-box p-4">
            <Image
              src={heroImage}
              alt="Description of the image"
              width={400} // Width of the image
              height={300} // Height of the image
              className="rounded-[38px]  border-2 border-[#693dc3] rotate-[4.29deg] trasnform transition-all duration-300 ease-in-out hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
