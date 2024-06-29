"use client";  

import { useState } from 'react';

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', image);  // Ensure the key matches the FastAPI endpoint's parameter name

    const response = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setUploadedImageUrl(data.url);
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      {uploadedImageUrl && <img src={`http://localhost:8000${uploadedImageUrl}`} alt="Uploaded Image" />}
    </div>
  );
}
