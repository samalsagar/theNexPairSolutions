import React, { useState, useEffect } from 'react';
import review1 from '../../assets/Testimonials/testimonial1.gif'
import review2 from '../../assets/Testimonials/testimonial2.gif'
import review3 from '../../assets/Testimonials/testimonial3.gif'

function Review() {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGif((prevGif) => (prevGif + 1) % 3); // Change GIF every time
    }, 3000); // 3000ms = 3 seconds for each GIF

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, []);

  const gifs = [
    review1, // Replace with actual URLs of your GIFs
    review2,
    review3
  ];

  return (
    <div className='mt-10'>
      <img src={gifs[currentGif]} alt="GIF" className='w-full h-3/4'/>
    </div>
  );
}

export default Review;
