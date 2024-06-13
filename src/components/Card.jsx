import React, { useState } from "react";
import "./Cards.css";
import Image from "next/image";

export default function Card({
  imgSrc,
  title,
  description,
  transitionClass,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (value) => {
    setIsHovered(value);
  };
  const handleMouseLeave = (value) => {
    setIsHovered(value);
  };

  return (
    <div
      className={`bg-[#050709] rounded-md overflow-hidden relative text-center p-6 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl w-full md:w-1/2 h-60 md:h-80 ${transitionClass}`}
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
    >
      <div className="text-gray-500 group-hover:scale-105 transition-all relative w-full h-full">
        <Image
          src={imgSrc}
          alt="portfolio-pic-1"
          width={500}
          height={584}
          placeholder="blur" 
          className={`w-full h-full object-contain rounded-2xl`}
        />
      </div>
      <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
        <div
          className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-md mx-2 shadow-sm"
          style={{
            background: "linear-gradient( 260deg, #291453 0%, #8c56fb 100% )",
          }}
        >
          <div className="content space-y-2">
            <h1 className="text-sm  font-bold tracking-wider">{title}</h1>
            <p className="text-xs ">{description}</p>
            <a href={link} className="underline text-sm">
              view
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
