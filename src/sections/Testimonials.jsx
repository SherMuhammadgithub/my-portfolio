"use client";
import clientImage from "/public/client-1.jpg";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import { TbTriangleFilled } from "react-icons/tb";
import "./testimonials.css";
import AOS from "aos";
import Image from "next/image";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [slides, setSlides] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlides(1);
      } else {
        setSlides(2);
      }
    };

    // initial value based on current window width
    handleResize();

    // resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonialsData = [
    {
      name: "Mujahid Khan",
      image: clientImage,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus autem totam magnam doloribus doloremque, nisi iusto.",
      title: "Web development",
      position: "Full stack Developer, of Pakistan",
    },
    {
      name: "Muhammad Ali",
      image: clientImage,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus autem totam magnam doloribus doloremque, nisi iusto.",
      title: "Mr Hravraed",
      position: "CEO, of Malta",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="testimonails"
      className="md:py-16 p-4 flex justify-center items-center bg-[#050709] text-white overflow-hidden"
    >
      <div className="container" data-aos="fade-up">
        <div className="flex flex-wrap justify-center items-start w-full gap-10 md:gap-0 2xl:px-24">
          <div className="header-section w-full md:w-1/2">
            <div className="section-header mx-3 w-[100%] max-w-[700px]  space-y-6">
              <h1 className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px] flex flex-wrap mx-2">
                My Client Stories
              </h1>
              <p className="text-base md:text-lg">
                I partner with clients to create custom web solutions, ensuring
                their unique needs are met with innovative and inspiring
                designs.
              </p>
            </div>
          </div>
          <div className="carousel-section w-full md:w-1/2 flex justify-center items-center">
            <Slider
              {...settings}
              className="xl:w-[30rem] lg:w-[50rem] md:w-[56rem] sm:w-[40rem] w-full overflow-hidden"
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="slider-card bg-[#140c1c] mx-4 p-6 rounded-2xl space-y-4 shadow-2xl"
                >
                  <div className="img-section flex items-center gap-4">
                    <div>
                      <h1>{testimonial.name}</h1>
                    </div>
                    <div className="ml-auto">
                      <Image
                        src={testimonial.image}
                        alt="clients"
                        placeholder="blur"
                        loading="lazy"
                        className="w-12 h-12 rounded-full"
                        width={0}
                        height={0}
                      />
                    </div>
                  </div>
                  <div className="icon flex text-[#874ffb]">
                    <TbTriangleFilled className="-rotate-90" />
                    <TbTriangleFilled className="rotate-90" />
                  </div>
                  <div className="content">
                    <p className="text-sm">{testimonial.quote}</p>
                  </div>
                  <div className="about-client">
                    <h1 className="font-semibold text-lg">
                      {testimonial.title}
                    </h1>
                    <p className="text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <span id="circle-effect"></span>
    </section>
  );
}
