import React from 'react'
import vertical from '../../assets/vertical.png';
import afsa from '../../assets/afsa.png'
import yatharth from '../../assets/yatharth.png';
function RecentWork() {
    return (
        <div className='mt-20'>
            <div className="bg-white font-[sans-serif] my-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">LATEST WORKS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                    <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:top-[-5px] relative top-0">
                            <img src={vertical} alt="Blog Post 3" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">Fast & Reliable Static Website</h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                Our first project in static website development was designed with a focus on speed, security, and simplicity.
									We created a visually appealing and responsive website that loads quickly, ensuring an optimal user experience across all devices.
									This project highlighted our expertise in HTML, CSS, JavaScript and reactJs, with a strong emphasis on SEO optimization and performance. Our static website solution
									not only met the client’s needs but also helped them increase their online visibility and user engagement by providing a fast and 
									reliable platform for their visitors.
                                </p>
                            </div>
                            <a href="https://vertical-view-front-end.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </div>
                        <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:top-[-5px] relative top-0">
                            <img src={afsa} alt="Blog Post 3" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">Effortless Static Web Solutions</h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                We specialize in building interactive static websites that provide seamless user engagement without compromising on performance. By using modern web technologies like JavaScript, ractJs, we incorporate interactive elements such as forms, animations, and dynamic content, creating a more engaging user experience while maintaining the speed and SEO advantages of static sites.<br />
                                Our static websites are designed to perform flawlessly, with interactive features that respond to user input, ensuring a smooth and enjoyable browsing experience.
                                </p>
                            </div>
                            <a href="https://afsa-kgi.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </div>
                    
                        <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:top-[-5px] relative top-0">
                            <img src={yatharth} alt="Blog Post 3" className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 hover:text-yellow-600 transition-colors duration-300">Secure Static Websites</h3>
                                <hr className="my-4 border-gray-200" />
                                <p className="text-gray-600 text-sm text-justify transition-all duration-300 hover:text-gray-800">
                                    Content delivery networks (CDNs) ensure your site is encrypted and protected from unauthorized access. With minimal attack vectors, a static website offers peace of mind for businesses looking for a robust, low-maintenance solution that safeguards both data and user privacy. <br /><br />
                                    Whether you're handling sensitive customer information or simply want to ensure your online presence is safe, our secure static websites provide the protection you need with no compromise on speed or performance.
                                </p>
                            </div>
                            <a href="https://yatharth-architect-front-end-a1do-git-main-samalsagars-projects.vercel.app/" target='_blank'>
                                <button className="mt-2 mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95">
                                    VISIT HERE
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentWork
