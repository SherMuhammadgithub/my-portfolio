import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#110818] py-16 flex justify-center items-center"
    >
      <div className="row flex flex-wrap my-2">
        <div className="col flex justify-center items-center w-full">
          <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-6">
            <h1 className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
              My Skills
            </h1>
            <p className="text-base md:text-lg text-center">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
