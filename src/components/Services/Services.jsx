import React, { useState, useEffect, useRef } from 'react';
import test from '../../assets/testService.png';
import test2 from '../../assets/testService2.png';
import test3 from '../../assets/testService3.png';
import './Services.css';

function Services() {
  // State to handle modal visibility and service data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  // Refs to store references to the service cards for the intersection observer
  const serviceCardRefs = useRef([]);

  // Function to open the modal and set content
  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // UseEffect to set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view'); // Add class when the card is in view
            observer.unobserve(entry.target); // Stop observing once the card is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    serviceCardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCardRefs.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

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
              className="service-card-container px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              ref={(el) => (serviceCardRefs.current[0] = el)} // Set ref for the first card
            >
              <div className="service-card py-8 px-12 mb-12 bg-gradient-to-r from-teal-400 to-teal-600 text-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg">
                <img src={test} alt="img" className="rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105" />
                <div className="text-center mt-4 lg:hidden">
                  <button
                    onClick={() =>
                      openModal(
                        'Static Website Development',
                        'We specialize in building custom static websites that offer superior performance and reliability. From design to deployment, we craft beautiful and functional static websites that scale with your business.'
                      )
                    }
                    className="btn-animation px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
                {/* Visible on larger screens */}
                <div className="service-description hidden lg:block text-gray-700 mt-4 -ms-10">
                <p className='text-justify font-serif'> we specialize in building fast, secure, and high-performance static websites that deliver exceptional user experiences. Our static website development approach ensures your website is both reliable and scalable, providing the perfect solution for businesses looking for a sleek, efficient online presence.<br />
                    <b>Why Choose Static Websites?</b><br/>
                    Static websites are designed to serve pre-rendered HTML, CSS, and JavaScript files directly to users, resulting in ultra-fast load times and improved performance. These websites are not only quick but also incredibly secure, as they lack dynamic server-side processes and databases. This makes them less prone to security vulnerabilities.
                    <br /><b>Benefits of Static Websites:</b><br />
                    <b>Speed & Performance:</b> Static websites load faster because they serve pre-built files directly to users, improving both user experience and SEO.
                    <br /><b>Security:</b> With no databases or server-side processes, static websites are inherently more secure against cyber threats.
                    <br /><b>Scalability:</b> Whether you have 100 or 100,000 visitors, static websites scale seamlessly to accommodate large traffic volumes without performance drops.
                   <br />
                   <b> Low Maintenance:</b> With fewer moving parts, static websites are easier to maintain and update, saving you time and effort in the long run.
                   <br /><b>Scalability:</b>br Whether you have 100 or 100,000 visitors, static websites scale seamlessly to accommodate large traffic volumes without performance drops.
                   </p>
                </div>
              </div>
            </div>

            {/* Service Block 2 */}
            <div
              className="service-card-container px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              ref={(el) => (serviceCardRefs.current[1] = el)} // Set ref for the second card
            >
              <div className="service-card py-8 px-12 mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg">
                <img src={test2} alt="" className="rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105" />
                <div className="text-center mt-4 lg:hidden">
                  <button
                    onClick={() =>
                      openModal(
                        'Dynamic Website Development',
                        'We specialize in providing top-notch Dynamic Website Development services tailored to meet your business needs...'
                      )
                    }
                    className="btn-animation px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
                {/* Visible on larger screens */}
                <div className="service-description hidden lg:block text-gray-700 mt-4 ml-8">
                <p className='text-justify font-serif'>we specialize in providing top-tier Dynamic Website Development services that are designed to elevate your business and engage your audience in meaningful ways. Dynamic websites offer a higher level of interactivity, customization, and real-time data integration compared to static websites. These websites adapt to user interactions and display personalized content based on factors like user preferences, location, or browsing behavior. <br/>

<b>Why Choose Dynamic Websites?</b><br />
Dynamic websites are ideal for businesses that require a more personalized and interactive online presence. They allow for real-time content updates, user-generated data, and enhanced features such as e-commerce functionality, blogs, member portals, and more. This type of website can tailor the user experience to meet the specific needs of your audience, providing a richer and more engaging journey. <br />

<b>Benefits of Dynamic Websites:</b>
<br /><b>Personalized User Experience:</b> Display customized content and recommendations based on user behavior, location, or preferences to drive engagement and conversions.
<br /><b>Real-Time Content:</b> With dynamic websites, you can offer live updates, real-time data integration, and seamless content management that keeps your website fresh and relevant.
<br />
<b>Increased Interactivity:</b><br /> Features like forms, search functionalities, interactive maps, and live chats help you connect with visitors, answer their queries, and foster engagement.
</p>
                </div>
              </div>
            </div>

            {/* Service Block 3 */}
            <div
              className="service-card-container px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              ref={(el) => (serviceCardRefs.current[2] = el)} // Set ref for the third card
            >
              <div className="service-card py-8 px-12 mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg">
                <img src={test3} alt="" className="rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105" />
                <div className="text-center mt-4 lg:hidden">
                  <button
                    onClick={() =>
                      openModal(
                        'Mobile App Development',
                        'We specialize in developing high-performance, feature-rich mobile applications tailored to meet your business needs...'
                      )
                    }
                    className="btn-animation px-6 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Know More
                  </button>
                </div>
                {/* Visible on larger screens */}
                <div className="service-description hidden lg:block text-gray-700 mt-4 ml-8">
                <p className='text-justify font-serif'>we specialize in creating innovative, user-friendly mobile applications that help businesses connect with their customers on the go. Whether you're looking to build an app for iOS, Android, or both platforms, our expert team is here to turn your ideas into functional, engaging, and high-performance mobile apps.

<br /><b>Why Choose Mobile App Development?</b><br />
In today’s mobile-first world, having a well-designed mobile app is essential for staying connected with your audience and offering a seamless user experience. Mobile apps allow businesses to engage users in real-time, deliver personalized content, and provide essential services directly at their fingertips. From entertainment and shopping to productivity and customer support, a mobile app can enhance your brand presence and build stronger customer relationships.

<br /><b>Benefits of Mobile Apps:</b><br />
<b>Increased Customer Engagement:</b><br /> With push notifications, personalized content, and easy access to services, mobile apps help keep your customers engaged and coming back for more.
<br /><b>Offline Access:</b> <br /> Mobile apps can offer offline capabilities, allowing users to access key features even when they don’t have an internet connection.
<br /><b>Enhanced User Experience:</b> <br />Native mobile apps are optimized for performance, ensuring smooth, responsive interactions and fast load times, leading to greater user satisfaction.
<br /><b>Brand Loyalty & Recognition:</b><br /> A well-crafted mobile app builds brand presence and provides a direct communication channel
 with your customers, boosting loyalty and recognition.</p>
                </div>
              </div>
            </div>
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
              <p className="text-lg font-semibold text-gray-800">
                Need more information?{' '}
                <span className="text-yellow-500 hover:underline hover:cursor-pointer">
                  <a href="">Contact us</a>
                </span>
              </p>
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
