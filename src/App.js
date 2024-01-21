import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RandomDogApp = () => {
  const [dogImage, setDogImage] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-3">Random Dog Image Generator</h1>
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={fetchDogImage}>Get New Image</button>
      </div>
      {dogImage && <img src={dogImage} alt="Random Dog" className="img-fluid" />}
    </div>
  );
};

export default RandomDogApp;
