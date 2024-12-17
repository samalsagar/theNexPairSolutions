import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger animation only once when the element enters the viewport
        threshold: 0.1,     // Trigger when 10% of the element is visible
    });

    return (
        <div className="relative bg-gradient-to-r from-white via-[#f0f0f0] to-[#d9d9d9] font-sans lg:h-screen justify-center align-ceter">
            {/* Title and Description */}
            <div className="text-center pt-10 mb-20">
                <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
                    Contact Us
                </h2>
                <p className="text-md text-gray-800 mt-6 leading-relaxed ps-20 pe-20">
                    "We'd love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Feel free to reach out through
                    any of the following methods, and we'll get back to you as soon as possible."
                </p>
            </div>

            {/* Main Contact Form */}
            <div className="grid lg:grid-cols-3 gap-12 px-8 sm:px-16 z-10 relative">
                {/* Left Side: Contact Form */}
                

                {/* Right Side: Image */}
                <motion.div
                    ref={ref} // Attach the ref here too for the image to trigger animation
                    className="relative lg:col-span-2 flex justify-center items-center"
                    initial={{ opacity: 0, x: 100 }} // Starting position (right)
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <img
                        src="https://readymadeui.com/images/analtsis.webp"
                        alt="Contact"
                        className="w-3/4 mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                    />
                </motion.div>

                <motion.div
                    ref={ref} // Attach the ref to the element you want to observe
                    className="max-w-lg mx-auto text-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h3 className="text-4xl font-semibold text-gray-800 mb-6">Let’s Get In Touch!</h3>
                    <p className="text-gray-600 mb-6">We’re excited to hear from you. Please fill out the form below, and we’ll get back to you shortly.</p>

                    <form className="space-y-6">
                        <motion.input
                            type="text"
                            placeholder="Your Name"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <motion.input
                            type="email"
                            placeholder="Your Email"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.input
                            type="text"
                            placeholder="Subject"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <motion.textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        ></motion.textarea>
                        <motion.button
                            type="button"
                            className="w-full py-3 text-white bg-gradient-to-r from-blue-400 to-yellow-500 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>

        </div>
    );
}

export default Contact;
