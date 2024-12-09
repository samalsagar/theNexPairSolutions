import React, { useState } from 'react';
import deve from '../../assets/developer.png';
import dynamic from '../../assets/dynamic.png';
import mobile from '../../assets/mobile-app.png';
import './Services.css'
function Services() {
  // State to handle modal visibility and service data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  // Function to open the modal and set content
  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <!-- component --> */}
      <div id="services" className="section relative pt-5 pb-8 md:pt-5 md:pb-0">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* <!-- Heading start --> */}
          <header className="text-center mx-auto mb-10 lg:px-20">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
              What We DO
            </h2>
            <p className="text-gray-900 leading-relaxed font-light text-lg mx-auto pb-2 mt-6">
            "Tailored solutions that drive innovation, improve performance, and elevate your brand’s presence in the digital world."
            </p>
          </header>
          {/* <!-- End heading --> */}
          {/* <!-- row --> */}
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {/* Service Block 1 */}
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{ visibility: '', animationDuration: '1s', animationName: 'fadeInUp' }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg hover:bg-gray-100">
                <div className="inline-block text-gray-900 mb-4">
                  <img src={deve} alt="Static Website Development" className='h-10 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110' />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black text-center transition-all duration-300 ease-in-out transform hover:text-blue-600">
                  Static Website Development
                </h3>
                <p className="text-gray-500 text-center mb-4 transition-all duration-300 ease-in-out hover:text-gray-700">
                  "Transform your online presence with high-performance, lightning-fast, and secure static websites that drive SEO results, offering you an affordable, scalable solution that’s easy to maintain and built to last."
                </p>
                <div className="text-center">
                  <button
                    onClick={() => openModal(
                      'Static Website Development',
                      "We specialize in building custom static websites that offer superior performance and reliability.From design to deployment, we craft beautiful and functional static websites that scale with your business.We use cutting-edge technologies like HTML, CSS, JavaScript,reactJs and static site generators to build robust websites.Our clients love how we turn their ideas into high-performing websites."
                    )}
                    className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Service Block 2 */}
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{ visibility: '', animationDuration: '1s', animationName: 'fadeInUp' }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg hover:bg-gray-100">
                <div className="inline-block text-gray-900 mb-4">
                  <img src={dynamic} alt="dynamic services" className='h-10 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110' />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black text-center transition-all duration-300 ease-in-out transform hover:text-blue-600 whitespace-nowrap">
                  Dynamic Website Development
                </h3>
                <p className="text-gray-500 text-center mb-4 transition-all duration-300 ease-in-out hover:text-gray-700">
                  "Dynamic website development empowers your brand to build a responsive, user-centric web presence that drives engagement and provides ongoing value to both users and administrators alike."
                </p>
                <div className="text-center">
                  <button
                    onClick={() => openModal(
                      'Dynamic Website Developement',
                      `we specialize in providing top-notch Dynamic Website Development services tailored to meet your business needs. A dynamic website is a powerful tool for businesses looking to engage customers and provide a personalized, interactive experience. Unlike static websites, dynamic websites can adapt to user interactions, display real-time data, and deliver content that changes dynamically based on different factors, such as user preferences, location, or behavior.
                      
                      Let us help you create a dynamic and interactive website that delivers real-time, engaging content while offering an excellent user experience. Get in touch today to discuss how we can help your business grow with our Dynamic Website Development services.`
                    )}
                    className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Service Block 3 */}
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{ visibility: '', animationDuration: '1s', animationName: 'fadeInUp' }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg rounded-lg hover:bg-gray-100">
                <div className="inline-block text-gray-900 mb-4">
                  <img src={mobile} alt="Mobile app Services" className='h-10 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110' />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black text-center transition-all duration-300 ease-in-out transform hover:text-blue-600 whitespace-nowrap">
                  Mobile App Development
                </h3>
                <p className="text-gray-500 text-center mb-4 transition-all duration-300 ease-in-out hover:text-gray-700">
                  "Our team of skilled mobile app developers uses the latest technologies and frameworks to create apps that are intuitive, responsive, and scalable. We ensure that your app performs flawlessly."
                </p>
                <div className="text-center">
                  <button
                    onClick={() => openModal(
                      'Mobile App Developement',
                      `We specialize in developing high-performance, feature-rich mobile applications tailored to meet your business needs. Whether you're looking to build an Android, iOS, or cross-platform app, we have the expertise to bring your ideas to life.

Our team of skilled mobile app developers uses the latest technologies and frameworks to create apps that are intuitive, responsive, and scalable. We ensure that your app performs flawlessly across different devices and platforms, providing a smooth experience for your users.

Let us help you transform your ideas into an innovative and functional mobile app that empowers your business and elevates user engagement. Get in touch today to discuss how we can help you create a powerful mobile presence!`
                    )}
                    className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Add more services similarly... */}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-modal-show">
            <h3 className="text-2xl font-bold mb-4 text-center">{modalContent.title}</h3>
            <p className="text-gray-700 mb-6 text-justify">{modalContent.description}</p>

            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-800">Need more information? <span className="text-blue-500 hover:underline hover:cursor-pointer">Contact us</span></p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default Services;
