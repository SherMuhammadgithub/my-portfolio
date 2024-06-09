import React from "react";
import "./Cards.css";

export default function Card({ imgSrc, title, description, transitionClass }) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl w-full md:w-1/2 h-80 ${transitionClass}`}
    >
      {" "}
      <div className="text-gray-500 group-hover:scale-105 transition-all">
        <img src={imgSrc} alt="portfolio-pic-1" />
      </div>
      <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
        <div
          className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-md mx-2 shadow-sm"
          style={{
            background: "linear-gradient( 260deg, #291453 0%, #8c56fb 100% )",
          }}
        >
          <div className="content space-y-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm">{description}</p>
            <button className="text-zinc-700 hover:text-white backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-1 px-6 shadow hover:shadow-white duration-700 text-sm">
              see
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}