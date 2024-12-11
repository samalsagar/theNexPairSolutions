import React, { useEffect, useState, useRef } from 'react';
import './AboutUs.css';
import img1 from '../../assets/AboutUsImages/image1.svg';
import img2 from '../../assets/AboutUsImages/email_workflow.svg';
import img3 from '../../assets/AboutUsImages/file_upload.svg';
import bg1 from '../../assets/bg2.jpg'; // The background image you want to use
import bg2 from '../../assets/bg3.webp';
import bg3 from '../../assets/bg4.jpeg';
// import bg3 from '../../assets/Testbg.jpg';
function AboutUs() {
  const cardDetails = [
    { img: img1, title: "Live messaging", desc: "Live messaging keeps the conversation flowing, bringing wit and creativity into the mix, making interactions feel engaging and lively.", imgSrc: bg1 },
    { img: img2, title: "Email workflow", desc: "As you craft each communication, make sure it doesn’t just feel lively, but also meaningful and impactful. Cultivate the right tone, balance, and solicitude to nurture relationships with your audience.", imgSrc: bg2 },
    { img: img3, title: "File upload", desc: "When it comes to file uploads, we focus on creating a smooth and cultivated process that values both functionality and ease of use. Every step is carefully designed to enhance the user experience, ensuring that uploading files is quick and effortless.", imgSrc: bg3 }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const aboutUsRef = useRef(null);

  // Intersection Observer to trigger when the AboutUs component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Make the cards visible when the component is in view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current); // Start observing the AboutUs section
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div ref={aboutUsRef} className='about-us-container pt-20'>
      <h1 className='text-xl font-bold text-blue-500'>ABOUT US</h1>
      <div>
        <h1 className='text-3xl font-bold text-yellow-600 mt-3'>What is NexPairSolutions?</h1>
        <p className='para lg:text-center mt-3 font-semibold ps-10 pe-10 sm:text-justify'>
          "NexPair Solutions is a service and consulting company specializing in providing high-quality solutions for businesses in the areas of mobile app development, web app development, and full-stack development. It was founded in December 2024 by two developers who were colleagues at a previous company."
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-14 p-6 mt-20 mb-10">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className={` card max-w-sm w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 rounded-2xl bg-white p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400 ${isVisible ? 'card-visible' : ''} ${index % 4 === 0 ? 'card-top' : index % 4 === 1 ? 'card-left' : index % 4 === 2 ? 'card-right' : 'card-bottom'}`}
            style={{
              position: 'relative',
              backgroundImage: `url(${card.imgSrc})`, // PNG as the background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              overflow: 'hidden'
            }}
          >
            {/* Apply a blur effect on the background */}
            <div
              className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '-1', // Ensures content stays on top of the background
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img src={card.img} alt={`${card.title} icon`} className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-blue-600">{card.title}</h4>
              <p className="text-white">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
