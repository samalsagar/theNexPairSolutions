import React, { useState } from 'react';
import faq from '../../assets/faq.png';
function FAQ() {
    // State to manage the visibility of the accordion content
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        // If the same item is clicked, close it. Otherwise, open the new one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 font-sans mt-20 bg-gray-100">
            <div className="text-center mt-20 mb-20">
                <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
                Answer & Question
                </h2>
                <p className="text-sm text-gray-800 mt-6 leading-relaxed">
                "The "Questions & Answers" (Q&A) section is designed to provide clarity on common queries that your audience may have. It is an essential feature for customer service, user support, and general communication, helping users find answers to their questions quickly without needing to contact support directly."
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                        <img
                            src={faq}
                            alt="FAQ Banner"
                        />
                    </div>
                    <div className="space-y-8 lg:col-span-2 max-lg:mt-6">
                        <div className="font-[sans-serif] space-y-4 max-w-4xl mx-auto border">
                            {/* Accordion items */}
                            {[
                                { question: "How can I contact you?", answer: "You can contact us through the 'Contact Us' form, via email, or by calling our contact number." },

                                { question: "What other services do we offer?", answer: "We offer a wide range of services, including full-stack development, where we handle both the front-end and back-end of web applications. Additionally, we specialize in e-commerce development, helping businesses create scalable and secure online stores. Our services also include integration with AWS cloud solutions, providing reliable cloud infrastructure for hosting, data storage, and scalable computing resources to enhance your business operations" },

                                { question: "How can i proceed for project ?", answer: "To proceed with a project, the first step is to communicate with the administration. This initial conversation helps clarify the project's requirements, objectives, and any necessary approvals. Once you have discussed the project with the administration, you will need to follow the formal process they outline. This may involve submitting documentation, obtaining permissions, or completing specific forms or procedures as required by the organization. It's important to ensure that you adhere to all guidelines and deadlines set by the administration to ensure smooth approval and progress of the project." },
                               
                            ].map((item, index) => (
                                <div key={index} className="accordion rounded-lg hover:bg-blue-50 transition-all">
                                    <button
                                        type="button"
                                        className="toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="mr-4">{item.question}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${openIndex === index ? '-rotate-180' : '-rotate-90'}`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`content px-6 transition-all duration-300 ${openIndex === index ? 'max-h-[500px] pb-5' : 'max-h-0 invisible overflow-hidden'}`}
                                    >
                                        <p className="text-sm text-gray-600 text-left">{item.answer}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
