import React, { useEffect, useState, useRef } from 'react';
import choose from '../../assets/ChooseUs/chhose.png';
import './ChhoseUs.css'; // Custom CSS can be added here

function ChhoseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div ref={componentRef}>
      <div className="mt-20 mb-28 py-12 bg-blue-100">
        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          {/* Image Section */}
          <div
            className={`relative md:w-5/12 transform transition-all duration-1000 ${isVisible ? 'animate-slide-left opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 translate-x-[-100%] rotate-[15deg]'}`}
          >
            <img className="rounded-2xl p-4" src={choose} alt="Choose Us" />
          </div>

          {/* Text Section */}
          <div
            className={`md:w-5/12 transform transition-all duration-1000 ${isVisible ? 'animate-slide-right opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 translate-x-[100%] rotate-[-15deg]'}`}
          >
            <h1 className="text-yellow-600 text-4xl font-extrabold lg:text-left sm:text-center">Why Choose Us</h1>
            <h1 className="mt-4 lg:text-left sm:text-center font-bold text-3xl">
              Create your app page
              <br />
              with expert developers
            </h1>
            <p className="lg:text-left mt-5 mb-10">
              We specialize in turning your app ideas into reality. Whether you're looking to develop a mobile application or a powerful web app, our team of expert developers is here to guide you every step of the way.
              <br />
              <br />
              With years of experience and a commitment to excellence, we leverage the latest technologies to create apps that are not only functional but also scalable and user-friendly. We work closely with you to understand your vision, ensuring that the final product aligns perfectly with your business goals.
            </p>
            <a href="/">
              <button className="btn px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mx-auto lg:mx-0 lg:ml-0">
                <span>Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChhoseUs;
