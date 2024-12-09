import React from 'react';
import './AboutUs.css';
import img1 from '../../assets/AboutUsImages/image1.svg';
import img2 from '../../assets/AboutUsImages/email_workflow.svg';
import img3 from '../../assets/AboutUsImages/file_upload.svg';

function AboutUs() {
  const cardDetails = [
    { img: img1, title: "Live messaging", desc: "Live messaging keeps the conversation flowing, bringing wit and creativity into the mix, making interactions feel engaging and lively." },
    { img: img2, title: "Email workflow", desc: "As you craft each communication, make sure it doesn’t just feel lively, but also meaningful and impactful. Cultivate the right tone, balance, and solicitude to nurture relationships with your audience." },
    { img: img3, title: "File upload", desc: "When it comes to file uploads, we focus on creating a smooth and cultivated process that values both functionality and ease of use. Every step is carefully designed to enhance the user experience, ensuring that uploading files is quick and effortless." }
  ];

  return (
    <div className='pt-20'>
      <h1 className='text-xl font-bold text-blue-500'>ABOUT US</h1>
      <div>
        <h1 className='text-3xl font-bold text-yellow-600 mt-3'>What is NexPairSolutions?</h1>
        <p className='para lg:text-center mt-3 font-semibold ps-10 pe-10 sm:text-justify'>
          "NexPair Solutions is a service and consulting company specializing in providing high-quality solutions for businesses in the areas of mobile app development, web app development, and full-stack development. It was founded in December 2024 by two developers who were colleagues at a previous company."
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="border max-w-sm w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 rounded-lg bg-white p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400"
          >
            <div className="item text-center ">
              <div className="flex justify-center mb-4">
                <img src={card.img} alt={`${card.title} icon`} className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-blue-600">{card.title}</h4>
              <p className="text-[#666666]">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
