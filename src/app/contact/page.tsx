'use client'

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ContactForm = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.form
        className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        initial="hidden"
        animate={controls}
        variants={formVariants}
      >
        <h2 className="text-4xl lg:text-6xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Get in Touch
        </h2>

        <div className="flex flex-wrap items-center mb-6">
          <motion.div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" variants={formVariants}>
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
              type="text"
              placeholder="Your Name"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/2 px-3" variants={formVariants}>
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
              type="email"
              placeholder="Email Address"
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap mb-6">
          <motion.div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" variants={formVariants}>
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
              type="text"
              placeholder="Phone No"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/2 px-3" variants={formVariants}>
            <input
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
              type="text"
              placeholder="Company"
            />
          </motion.div>
        </div>

        <motion.div className="mb-6 px-3" variants={formVariants}>
          <select
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
          >
            <option>Type Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing</option>
            <option>IT Consulting</option>
          </select>
        </motion.div>

        <motion.div className="mb-6 px-3" variants={formVariants}>
          <textarea
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-3xl outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Type Message"
            rows={5}
          ></textarea>
        </motion.div>

        <motion.div className="px-3" variants={formVariants}>
          <button
            className="w-full py-3 text-white rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500"
            type="submit"
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactForm;

