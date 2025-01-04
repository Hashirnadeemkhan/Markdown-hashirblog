
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";



// Blog data
const blogs = [
  {
    id: 1,
    title: "C Programming Tutorial",
    description: "This is a C programming tutorial for beginners.",
    slug: "c-programming-tutorial",
    date: "02/03/2025",
    author: "Hashir",
    image: "/blog-img.webp",
  },{
    id:2,
  title: 'ChatGPT vs. Gemini',
description: 'This is JavaScript tutorial and this is for learning JavaScript',
slug: 'chatgpt-vs-gemini',
date: '08/02/2025',
author: 'Hashir',
image: '/gpt.webp'
  },
  {
    id: 4, // Add an appropriate ID based on your list
    title: "C++ Programming Tutorial",
    description: "This is a C++ tutorial and this is for learning C++",
    slug: "cpp-programming-tutorial",
    date: "09/02/2025",
    author: "Hashir",
    image: "/cpp.webp",
  },
  {
    id: 5, // Add an appropriate ID based on your list
    title: "CSS Tutorial",
    description: "This is a CSS tutorial and this is for learning CSS",
    slug: "css-tutorial",
    date: "11/02/2025",
    author: "Hashir",
    image: "/css.webp",
  }
  
  

];

const TopBlogs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Explore Our Top Blogs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Stay updated with the latest trends and tips in web development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                height={300}
                width={300}
                priority
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{blog.description}</p>
                <Link href={`/blogpost/${blog.slug}`}>
                  <Button className="mx-1" variant="outline" >
                    Read More
                  </Button>
           
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlogs;
