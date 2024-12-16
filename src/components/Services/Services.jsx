import React from 'react'
import service from '../../assets/services.mp4';

function Services() {
  return (
    <div className="relative w-full h-auto -mt-14">
      <header className="text-center mx-auto mb-10 lg:px-20">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
          What We Do
        </h2>
        <p className="text-gray-900 leading-relaxed font-light text-lg mx-auto pb-2 mt-6">
          "Tailored solutions that drive innovation, improve performance, and elevate your brand’s presence in the digital world."
        </p>
      </header>
      <video 
        id="heroVideo"
        className=" -mt-10 w-full h-auto  xl:h-[400px] 2xl:h-[500px] transition-all duration-300 sm:w-full md:w-3/4 lg:w-4/5 xl:w-3/4 2xl:w-2/3"
        src={service}
        alt="Awesome hero page video"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  )
}

export default Services
