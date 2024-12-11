import React from 'react';
import heroVideo from '../../assets/hero3.mp4';
import './HeroSection.css'
function HeroSection() {
  return (
    <div className="relative w-full h-auto">
      <video
        id="heroVideo"
        className="w-full h-auto transition-all duration-300 sm:w-full md:w-3/4 lg:w-4/5 xl:w-3/4 2xl:w-2/3"
        src={heroVideo}
        alt="Awesome hero page video"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}

export default HeroSection;
