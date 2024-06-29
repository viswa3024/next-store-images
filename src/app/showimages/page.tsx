// pages/index.js
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [images, setImages] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'; // Default to localhost if not set

  useEffect(() => {

    console.log("apiUrl: ", apiUrl)
    async function fetchImages() {
      try {
        const response = await fetch(`${apiUrl}/images`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, [apiUrl]);

  return (
    <div>
      {images.map((image, index) => (
        <Image
            key={index}
            src={`${apiUrl}${image}`}
            alt={`Image ${index}`}
            width={500}
            height={500}
            priority={index === 0} // Example: Set priority for the first image
      />
      ))}
    </div>
  );
}
