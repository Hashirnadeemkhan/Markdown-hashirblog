"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-gray-800 dark:text-gray-200 transition-colors duration-300 mt-52">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">
              HashirBLog
            </h2>
            <p className="text-sm">
              Your ultimate destination for coding tutorials, best practices, and tips to level up your development journey.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            >
              <i className="fab fa-twitter text-lg"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
            >
              <i className="fab fa-github text-lg"></i>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Explore
            </h3>
            <ul>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/about">About</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Categories
            </h3>
            <ul>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/categories/web-development">Web Development</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/categories/data-science">Data Science</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/categories/devops">DevOps</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/categories/ui-ux-design">UI/UX Design</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Resources
            </h3>
            <ul>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/resources/documentation">Documentation</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/resources/tutorials">Tutorials</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/resources/courses">Courses</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/resources/github-repo">GitHub Repo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Support
            </h3>
            <ul>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/support/faqs">FAQs</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/support/community">Community</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/support/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-1 hover:text-purple-600 dark:hover:text-purple-400">
                <Link href="/support/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} <span className="font-semibold">HashirBog</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
