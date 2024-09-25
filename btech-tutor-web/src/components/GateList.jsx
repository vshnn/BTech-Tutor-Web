import React, { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const GateList = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (

        <div className='font-body'>
            <h1 className='w-4/5 mt-16 text-3xl mb-5 mx-auto text-primary'>Table of Contents</h1>
            <div id="accordion-example" className='w-4/5 mx-auto'>

                <h2 id="accordion-example-heading-1">
                    <button
                        type="button"
                        className={`flex items-center justify-between w-full my-5 p-5 font-medium rtl:text-right text-white  ${activeIndex === 1 ? 'bg-green-500' : 'bg-tertiary'} `}
                        aria-expanded={activeIndex === 1}
                        onClick={() => toggleAccordion(1)}
                    >
                        <span>BROCHURE</span>
                        <svg className={`w-6 h-6 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-example-body-1" className={`${activeIndex === 1 ? '' : 'hidden'}`}>
                    <div className="p-5 w-3/5 mb-2 text-gray-700  flex justify-between">
                        <p>Get access to the brochure</p>
                        <span className='text-blue-500 cursor-pointer'><FaExternalLinkAlt /></span>
                    </div>

                </div>

                <h2 id="accordion-example-heading-2">
                    <button
                        type="button"
                        className={`flex items-center justify-between w-full my-5 p-5 font-medium rtl:text-right text-white  ${activeIndex === 2 ? 'bg-green-500' : 'bg-tertiary'} `}
                        aria-expanded={activeIndex === 2}
                        onClick={() => toggleAccordion(2)}
                    >
                        <span>CONTACT US</span>
                        <svg className={`w-6 h-6 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-example-body-2" className={`${activeIndex === 2 ? '' : 'hidden'}`}>
                    <div className="p-5 w-3/5 mb-2 text-gray-700  flex justify-between">
                        <p>Get access to contact details</p>
                        <span className='text-blue-500 cursor-pointer'><FaExternalLinkAlt /></span>
                    </div>
                </div>

                <h2 id="accordion-example-heading-3">
                    <button
                        type="button"
                        className={`flex items-center justify-between w-full my-5 p-5 font-medium rtl:text-right text-white  ${activeIndex === 3 ? 'bg-green-500' : 'bg-tertiary'} `}
                        aria-expanded={activeIndex === 3}
                        onClick={() => toggleAccordion(3)}
                    >
                        <span>REGISTER</span>
                        <svg className={`w-6 h-6 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-example-body-3" className={`${activeIndex === 3 ? '' : 'hidden'}`}>
                    <div className="p-5 w-3/5 mb-2 text-gray-700  flex justify-between">
                        <div class="w-full max-w-md sm:p-3 md:p-4 ">
                                <form class="space-y-2" action="#">
                                    {/* <h5 class="text-xl font-medium text-tertiary">Fill out the Contact Form Below</h5> */}
                                    <div>
                                        <label for="branch" class="block mb-2 text-sm font-medium text-tertiary ">Your Name</label>
                                        <input type="text" name="branch" id="branch" placeholder="John Doe" class="text-gray-900 text-sm border-2 border-tertiary focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400" required />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-tertiary">Your email</label>
                                        <input type="email" name="email" id="email" class=" text-gray-900 text-sm border-2 border-tertiary focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400 " placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label for="branch" class="block mb-2 text-sm font-medium text-tertiary ">Your branch</label>
                                        <input type="text" name="branch" id="branch" placeholder="CSE" class="mb-2 text-gray-900 text-sm border-2 border-tertiary focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400" required />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center">SUBMIT</button>

                                </form>
                            </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default GateList
