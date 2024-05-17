import React from "react";
import heroImage from "/public/me.png";
import Image from "next/image";
export default function Hero() {
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
                className="border-2 border-[#693dc3] rounded-full bg-transparent text-[#693dc3] py-4 px-6 text-sm md:text-lg hover:bg-[#693dc3] hover:text-white transition-all duration-300 ease-in-out"
              >
                Contact US &
              </a>
              <div className="social-media flex items-center space-x-4">
                <div className="w-10 aspect-square flex justify-center items-center rounded-full border-2 border-[#693dc3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor" 
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-10 aspect-square flex justify-center items-center rounded-full border-2 border-[#693dc3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <div className="w-10 aspect-square flex justify-center items-center rounded-full border-2 border-[#693dc3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                  </svg>
                </div>
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
