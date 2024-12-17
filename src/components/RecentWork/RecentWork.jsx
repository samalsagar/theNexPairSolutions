import React from 'react';
import { motion } from 'framer-motion';
import vertical from '../../assets/vertical.png';
import afsa from '../../assets/afsa.png';
import yatharth from '../../assets/yatharth.png';

function RecentWork() {
    return (
        <div className='mt-20'>
            <div className="bg-white font-[sans-serif] my-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <motion.h2
                            className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Latest Works
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                        {/* Project 1 */}
                        <motion.div
                            className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:top-[-5px] relative top-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} // Trigger animation once when the element comes into view
                            transition={{ duration: 0.5 }}
                        >
                            <img src={vertical} alt="Fast & Reliable Static Website" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
                                    Fast & Reliable Website
                                </h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                    Designed for speed, security, and simplicity, this static website loads quickly, ensuring optimal user experience across devices. Built with HTML, CSS, JavaScript, and ReactJS, we prioritized SEO optimization and performance to enhance online visibility and user engagement.
                                </p>
                            </div>
                            <a href="https://vertical-view-front-end.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:top-[-5px] relative top-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} // Trigger animation once when the element comes into view
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img src={afsa} alt="Effortless Static Web Solutions" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
                                    Effortless Web Solutions
                                </h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                    Specializing in interactive static websites, we combine modern technologies like ReactJS and JavaScript to create engaging user experiences while maintaining speed and SEO advantages. This project demonstrates our ability to blend interactivity and performance seamlessly.
                                </p>
                            </div>
                            <a href="https://afsa-kgi.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:top-[-5px] relative top-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} // Trigger animation once when the element comes into view
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <img src={yatharth} alt="Secure Static Websites" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
                                    Secure Static Websites
                                </h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                    Our static websites are built with security in mind, ensuring encrypted connections and robust data protection. With minimal attack vectors, these sites offer peace of mind while providing fast and reliable performance, perfect for businesses handling sensitive information.
                                </p>
                            </div>
                            <a href="https://yatharth-architect-front-end-a1do-git-main-samalsagars-projects.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentWork;
