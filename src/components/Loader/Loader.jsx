import React from 'react';
import './Loader.css'

function Loader() {
    return (
        <div className="loader-container flex flex-col items-center justify-center h-screen bg-black">
            <div className="text mb-4 animate-text-zoom">NEXPAIR SOLUTIONS</div>
            <div className="loader"></div>  {/* Loader */}
        </div>
    );
}

export default Loader;
