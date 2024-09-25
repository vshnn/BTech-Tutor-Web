import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

const List = () => {
  const { state } = useLocation();
  const { subjects = [], scheme, branch, semester } = state || {};

  const [accordionContent, setAccordionContent] = useState({}); // Stores content by subject id
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = async (index, subjectId) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (!accordionContent[subjectId]) {
      try {
        // Fetch data only when accordion is opened for the first time
        const response = await fetch(`https://btechtutors.onrender.com/api/get_contents/?subid=${subjectId}`);
        if (!response.ok) throw new Error("Failed to fetch subject content");
        const data = await response.json();

        // Store content based on subjectId
        setAccordionContent((prevContent) => ({
          ...prevContent,
          [subjectId]: data[0] // Assuming response contains a single subject object
        }));
      } catch (error) {
        console.error("Error fetching subject content:", error);
      }
    }
  };

  const handleViewPDF = async (subname, module) => {
    try {
      const response = await fetch(`https://btechtutors.onrender.com/api/get_notes?subname=${subname}&module=${module}`);
      if (!response.ok) throw new Error("Failed to fetch PDF link");
      const data = await response.json();
      if (data.length > 0) {
        window.open(data[0].fileblob, '_blank') // Redirect to the PDF link
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='font-body'>
      <h1 className='w-4/5 mt-16 text-3xl mb-5 mx-auto text-primary'>Table of Contents for <span className='text-secondary font-bold'>S{semester} {branch}</span> </h1>
      <div id="accordion-example" className='w-4/5 mx-auto min-h-screen'>
        {subjects.map((subject, index) => (
          <div key={subject.id}>
            <h2 id={`accordion-example-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full my-5 p-5 font-medium rtl:text-right text-white ${activeIndex === index ? 'bg-secondary' : 'bg-tertiary'}`}
                aria-expanded={activeIndex === index}
                onClick={() => toggleAccordion(index, subject.id)} // Pass subject.id here
              >
                <span>{subject.subject_name}</span>
                <svg className={`w-6 h-6 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div id={`accordion-example-body-${index}`} className={`${activeIndex === index ? '' : 'hidden'}`}>
              <div className="p-5 w-3/5">
                {/* Check if accordion content for this subjectId exists before rendering */}
                {accordionContent[subject.id] ? (
                  <div>
                    {/* Render syllabus link */}
                    {accordionContent[subject.id].syllabus ? (
                      <div className="mb-2 text-gray-700 flex justify-between">
                        <p>Syllabus</p>
                        <a
                          href={accordionContent[subject.id].syllabus.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-blue-500 cursor-pointer'
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    ) : (
                      <p>No syllabus available</p>
                    )}

                    {/* Render question paper links */}
                    {accordionContent[subject.id].question_papers && accordionContent[subject.id].question_papers.length > 0 ? (
                      <div className="mb-2 text-gray-700 flex justify-between">
                        <p>Previous Year Questions</p>
                        <a
                          href={accordionContent[subject.id].question_papers[0]?.filelink.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-blue-500 cursor-pointer'
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    ) : (
                      <p>No question papers available</p>
                    )}

                    {/* Render demo link if available */}
                    {accordionContent[subject.id].demolink && (
                      <div className="mb-2 text-gray-700 flex justify-between">
                        <p>Demo Link</p>
                        <a
                          href={accordionContent[subject.id].demolink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-blue-500 cursor-pointer'
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    )}

                    {/* Render course link if available */}
                    {accordionContent[subject.id].courselink && (
                      <div className="mb-2 text-gray-700 flex justify-between">
                        <p>Course Link</p>
                        <a
                          href={accordionContent[subject.id].courselink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-blue-500 cursor-pointer'
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    )}

                    {/* Display modules */}
                    {[1, 2, 3, 4, 5].map((moduleIndex) => (
                      <div key={moduleIndex} className='mb-2 text-gray-700 flex justify-between'>
                        <span>Module {moduleIndex}</span>
                        <button onClick={() => handleViewPDF(subject.subject_name, moduleIndex)}>
                          View PDF
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Loading content...</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
