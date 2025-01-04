"use client";
import React, { useState } from "react";


const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const packages = [
    {
      name: "Startup Package",
      price: "249.50",
      features: [
        "5-page website.",
        "5 stock photos.",
        "Responsive design (Mobile-friendly).",
        "Basic SEO setup.",
        "1-month maintenance support.",
      ],
    },
    {
      name: "Silver Package",
      price: "374.50",
      features: [
        "10-page website.",
        "CMS (Content Management System).",
        "8 stock photos.",
        "On-page SEO optimization.",
        "2 months maintenance.",
      ],
    },
    {
      name: "Gold Package",
      price: "699.50",
      features: [
        "15-page custom website.",
        "Custom forms and payment integration.",
        "Advanced SEO setup.",
        "3 months support and updates.",
      ],
    },
  ];

  return (
    <div className="p-8 md:p-12 lg:p-20 bg-white text-gray-800 dark:bg-black dark:text-white">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">
        Our Pricing
      </h2>
      <h3 className="text-center text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-5">
        You can find a{" "}
        <span className="text-purple-500 dark:text-purple-400">cheap plan</span>
      </h3>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 md:mb-10">
        {[
          "Web Development",
          "App Development",
          "Logo Design",
          "Animation",
          "Illustration",
          "Branding",
          "SaaS",
          "SEO",
          "SMM",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-3 md:px-5 py-2 m-1 rounded-lg ${
              activeTab === tab
                ? "bg-purple-700 text-white dark:bg-purple-500"
                : "text-gray-800 dark:text-white"
            } hover:bg-purple-700 hover:text-white dark:hover:bg-purple-500 transition duration-300`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-3xl md:text-4xl font-bold mb-4">${pkg.price}</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 transition duration-300">
              Add To Cart
            </button>
            <ul className="text-left">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <span className="text-purple-500 dark:text-purple-400 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
