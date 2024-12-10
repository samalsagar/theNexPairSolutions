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

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="mt-20 w-full">
      <div className="mt-6 font-[sans-serif] text-black">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-black inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
              What our happy clients say
            </h2>
            <p className="text-sm text-black mt-6 leading-relaxed">
            Our clients are at the heart of everything we do. Their feedback drives us to constantly improve and innovate. From exceptional service to outstanding results, we are proud to have built lasting relationships with clients who trust and appreciate our commitment. Here’s what some of them have to say about their experiences with us:
            </p>
          </div>

          <section className="relative">
            <svg className="absolute blur-3xl opacity-70 -top-6 animate-pulse" width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_56)">
                <g filter="url(#filter0_f_17_56)">
                  <path d="M128.6 0H0V322.2L250.5 231.5L128.6 0Z" fill="white"></path>
                  <path d="M0 322.2V400H240H320L250.5 231.5L0 322.2Z" fill="#7000FF"></path>
                  <path d="M320 400H400V78.75L250.5 231.5L320 400Z" fill="#5200FF"></path>
                  <path d="M400 0H128.6L250.5 231.5L400 78.75V0Z" fill="#380094"></path>
                </g>
              </g>
              <defs>
                <filter id="filter0_f_17_56" x="-160.333" y="-160.333" width="720.666" height="720.666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_17_56"></feGaussianBlur>
                </filter>
              </defs>
            </svg>

            <div className="relative max-w-7xl 2xl:max-w-screen-2xl lg:px-16 md:px-12 mx-auto py-10 px-8 h-svh flex flex-col justify-center items-center">
              <div className="lg:border lg:p-20 lg:rounded-[4rem] border-white/5 lg:backdrop-blur-xl lg:shadow-2xl 2xl:p-32">
                <div className="pb-6 text-black font-medium mx-auto text-xl h-64 italic serif text-balance items-center text-center lg:text-4xl">
                  <p><span className="">"</span>{currentReview.text}<span className="">"</span></p>
                </div>

                <div className="flex items-center justify-center lg:mt-12 md:mt-12 sm:mt-5">
                  {/* Buttons to change the active testimonial */}
                  <button onClick={prevReview} className="inline-block mx-2 font-bold text-center rounded-xl focus:outline-none focus:ring-2 ring-offset-2 ring-white size-12">
                    <img className="inline-block size-12 rounded-xl object-cover" src={currentReview.image} alt={currentReview.name} />
                  </button>
                </div>
                {/* Dynamically render name and role */}
                <div className="text-center py-6">
                  <h2 className="text-black font-medium text-base">{currentReview.name}</h2>
                  <a href="#" className="text-xs text-gray-600">{currentReview.role}</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Review;
