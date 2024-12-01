import React from 'react'
import choose from '../../assets/ChooseUs/chhose.png'
import './ChhoseUs.css'
function ChhoseUs() {
    return (
        <div>
            <div className="mt-20 mb-28 py-12 bg-blue-100">

                <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
                    <div className="relative md:w-5/12">
                        <img className="rounded-2xl p-4" src={choose} />

                    </div>

                    <div className=" md:w-5/12">
                        <h1 className='text-yellow-600 text-4xl font-extrabold lg:text-left sm:text-center'>Why Choose Us</h1>
                        <h1 className='mt-4 lg:text-left sm:text-center font-bold text-3xl'>Create your app page<br />
                            with expert developer</h1>
                        <p className='lg:text-left mt-5  mb-10'>
                            we specialize in turning your app ideas into reality. Whether you're looking to develop a mobile application or a powerful web app, our team of expert developers is here to guide you every step of the way.<br /><br />

                            With years of experience and a commitment to excellence, we leverage the latest technologies to create apps that are not only functional but also scalable and user-friendly. We work closely with you to understand your vision, ensuring that the final product aligns perfectly with your business goals.
                        </p>
                        <a href="/">
                        <button className='btn px-6 py-3 text-lg font-semibold text-whit rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl mx-auto lg:mx-0 lg:ml-0'>
                            <span>Get Started </span>
                        </button>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChhoseUs
