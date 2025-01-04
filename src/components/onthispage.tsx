"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


interface Heading {
    text: string | null;
    id: string;
  }
  
  interface OnThisPageProps {
    htmlContent: string;
  }
  
  const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page absolute top-24 md:right-48 lg:right-1/4 hidden lg:block">
      <h2 className='text-md font-bold my-2'>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <Link href={`#${heading.id}`}>{heading.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;