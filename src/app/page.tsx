"use client";

import Image from "next/image";
import PricingSection from "@/components/PricingSection";
import TopBlogs from "@/components/TopBlogs";
import Testimonals from "@/components/Testimonals";
// import Typed from "typed.js";
import hero from "/public/hero.webp";
import React, { useRef, } from "react";

const Page = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "Coding",
  //       "Web Development",
  //       "Software Engineering",
  //       "Data Science",
  //       "Machine Learning",
  //     ],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 py-10  lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community{" "}
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects, or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            width={300}
            height={300}
            src={hero}
            priority
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <PricingSection />
      <Testimonals />
      <TopBlogs />
    </main>
  );
};

export default Page;
