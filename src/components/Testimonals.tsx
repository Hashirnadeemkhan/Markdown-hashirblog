"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import stars from "/public/stars.png"

const testimonialsData = [
  {
    text: "Lorem dsfsdcx is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    author: "CEO - Digitil AGENCY",
    stars: 5,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.",
    author: "CTO - Tech Solutions",
    stars: 5,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the industry standard dummy text ever since the 1500s.",
    author: "CEO - Alpha Corp",
    stars: 5,
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It is a long-established fact.",
    author: "COO - Beta Agency",
    stars: 5,
  },
  {
    text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    author: "CFO - Gamma Ltd",
    stars: 5,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has survived five centuries.",
    author: "Founder - Delta Innovations",
    stars: 5,
  },
];

const Testimonals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonialsData.length / 2)); // Update index logic
  };


  return (
    <div className="mt-32 mb-20">
      <h1 className="text-center font-semibold lg:text-5xl text-3xl">
        TESTIMONIALS
      </h1>
      <hr className="border-red-700 mb-10 w-52 mx-auto mt-2" />

      <div className="relative overflow-hidden lg:max-w-4xl max-w-xl mx-auto ">
        {/* Testimonial Cards Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-4 w-full" // Add gap between cards
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Move slides for 2 cards per row
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 space-y-4 flex-shrink-0 shadow-xl rounded-2xl w-[100%] lg:w-[calc(50%-1rem)]" // Adjust width and leave space for the gap
              style={{
                backgroundImage:
                  'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="flex">
                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src={stars}
                    alt="star"
                    height={20}
                   
                    
                  />
                ))}
              </div>
              <p className="text-white text-lg">{testimonial.text}</p>
              <h4 className="text-xl font-bold text-white">{testimonial.author}</h4>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className=" inset-y-0  flex items-center">
          {/* Add Previous Button */}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* Add Next Button */}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: testimonialsData.length / 2 }).map((_, index) => (
          <span
            key={index}
            className={`h-5 w-5 mx-1 rounded-full ${
              currentIndex === index
                ? "bg-gradient-to-r from-[#981127] via-[#652046] to-[#24346D]"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
