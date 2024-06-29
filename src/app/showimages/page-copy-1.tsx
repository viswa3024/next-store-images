// pages/index.js
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('http://localhost:8000/images');
      const data = await response.json();
      setImages(data.images);
    }
    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={`http://localhost:8000${image}`}
            alt={`Image ${index}`}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
