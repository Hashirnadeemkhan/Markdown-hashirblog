
import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';
import Image from 'next/image';


const dirContent = fs.readdirSync("src/content", "utf-8") //Ye directory ke andar ki saari files ke names ko ek array ke form me return karta hai:

const blogs = dirContent.map(file=>{  
    const fileContent = fs.readFileSync(`src/content/${file}`, "utf-8") //Har file name ke liye, aap fs.readFileSync ko call karte hain aur uska content read karte hain.
    const {data} = matter(fileContent)  // Metadata extract kiya
    return data  // Data ko return kiya
})

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
            {/* Blog post image */}
         
             <Image
              height={300}
              width={300}
              priority
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className=" mb-4">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="text-sm  mb-4">
                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;