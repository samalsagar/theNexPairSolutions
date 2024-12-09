import React, { useState, useEffect } from 'react';
import rohan from '../../assets/rohan.jpeg';
import gagn from '../../assets/Gagan.jpg';

function Review() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Array of reviews
  const reviews = [
    {
      name: "Mr. Ashwin",
      role: "CEO, VERTICALVIEW",
      image: "https://readymadeui.com/team-1.webp",
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      name: "Mr. Gagan Joshi",
      role: "Head (Learning and Development), AFSA",
      image: gagn,
      text: "Our experience was fantastic! The team was extremely helpful, and they went above and beyond to ensure our project was a success. Highly recommend.",
    },
    {
      name: "Mr. Rohan Mishra",
      role: "Founder, YATHARTH ARCHITECT SOLUTIONS",
      image: rohan,
      text: "I couldn't be happier with the outcome. The team delivered on time and exceeded all expectations. Professional and reliable service.",
    },
  ];

  // Next and Previous review logic
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Auto carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // Change review every 5 seconds (5000ms)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className='mt-20'>
      <div className="mt-6 font-[sans-serif]">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
              What our happy clients say
            </h2>
            <p className="text-sm text-gray-800 mt-6 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>

          <div className="max-w-xl mt-16 mx-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src={reviews[currentReviewIndex].image}
                className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
                alt={reviews[currentReviewIndex].name}
              />
              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-extrabold">{reviews[currentReviewIndex].name}</h4>
                <p className="text-xs text-gray-500 mt-1">{reviews[currentReviewIndex].role}</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm leading-relaxed">{reviews[currentReviewIndex].text}</p>
            </div>
          </div>

          {/* Previous and Next Buttons */}
          <div className="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-0 top-0 bottom-0 my-auto" onClick={prevReview}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 inline" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="bg-gray-800 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-0 top-0 bottom-0 my-auto" onClick={nextReview}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
