import React, { useState, useEffect, useRef } from 'react';
import rohan from '../../assets/rohan.jpeg';
import gagn from '../../assets/Gagan.jpg';
import './Review.css'; // Custom CSS for animations
import test from '../../assets/happy-customer.png';

function Review() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const componentRef = useRef(null);

  // Array of reviews with different images
  const reviews = [
    {
      name: "Mr. Ashwin",
      role: "CEO, VERTICALVIEW",
      image: "https://readymadeui.com/team-1.webp", // Image for Ashwin's review
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      name: "Mr. Gagan Joshi",
      role: "Head (Learning and Development), AFSA",
      image: gagn, // Image for Gagan's review
      text: "Our experience was fantastic! The team was extremely helpful, and they went above and beyond to ensure our project was a success. Highly recommend.",
    },
    {
      name: "Mr. Rohan Mishra",
      role: "Founder, YATHARTH ARCHITECT SOLUTIONS",
      image: rohan, // Image for Rohan's review
      text: "I couldn't be happier with the outcome. The team delivered on time and exceeded all expectations. Professional and reliable service.",
    },
  ];

  // IntersectionObserver to detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when component comes into view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current); // Start observing the component
    }

    // Auto-play functionality
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    // Cleanup the interval when the component is unmounted
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current); // Cleanup observer
      }
      clearInterval(interval); // Clear interval on unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to go to the next review when clicked
  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex]; // Get the current review based on the index

  return (
    <div ref={componentRef} className="mt-16 w-full bg-gradient-to-t from-gray-50 to-gray-100 py-16">
      <div className="font-sans text-black w-full">
        <div className="relative w-full">
          <header className="text-center mx-auto mb-16 lg:px-24">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
              What Our Happy Clients Say
            </h2>
            <p className="text-gray-800 leading-relaxed font-light text-lg mx-auto pb-2 mt-6 max-w-2xl px-4">
              Our clients are at the heart of everything we do. Their feedback drives us to constantly improve and innovate. Here’s what some of them have to say about their experiences with us:
            </p>
          </header>

          {/* Carousel Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 px-5">
            {/* Left side: Image with Animation */}
            <div
              className={`relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-xl transform transition-all duration-1000 ${isVisible ? 'animate-slide-left opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 translate-x-[-100%] rotate-[15deg]'}`}
            >
              <img
                src={test} // Dynamically using currentReview.image
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                alt={currentReview.name} // Use the currentReview.name as alt text for better accessibility
              />
            </div>

            {/* Right side: Review Text with Animation */}
            <div
              className={`relative flex flex-col items-center justify-between p-6 bg-gradient-to-r from-blue-300 to-blue-700 text-black rounded-2xl border-2 border-gray-300 transform transition-all duration-1000 ${isVisible ? 'animate-slide-right opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 translate-x-[100%] rotate-[-15deg]'}`}
            >
              <div className="pb-6 text-lg font-semibold mx-auto text-center italic opacity-90 overflow-hidden">
                <p className="text-base px-4 h-full">{currentReview.text}</p>
              </div>

              <div className="flex items-center justify-center mt-8 space-x-8">
                <button
                  onClick={goToNextReview} // Call goToNextReview when the button is clicked
                  className="bg-transparent border-2 border-blue-300 rounded-full p-4 text-white hover:bg-white hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    className="w-20 h-20 object-cover rounded-full border-4 border-white"
                    src={currentReview.image} // Dynamically display the reviewer's image
                    alt={currentReview.name}
                  />
                </button>
              </div>

              {/* Dynamically render name and role */}
              <div className="text-center py-6">
                <h3 className="font-medium text-xl text-gray-800">{currentReview.name}</h3>
                <a href="#" className="text-sm text-gray-600">{currentReview.role}</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Review;
