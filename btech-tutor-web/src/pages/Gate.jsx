import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const Gate = () => {

  const [formData, setFormData] = useState({
    branch: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({

      branch: "",
  
    });
  };

  return (
    <div className='font-body w-full mx-auto'>
      <div className="bg-secondary mx-auto text-white">
        <div className="w-4/5 mx-auto py-12">
          <h1 className="text-sm font-bold text-tertiary">GATE</h1>
          <div className="mt-5 w-4/5 text-lg ">
            <h1 className="font-medium text-5xl mb-6">Achieve Your GATE Goals with Comprehensive Notes, Syllabus Coverage, and Previous Year Question Papers</h1>
            <p>Your Ultimate GATE Study Hub</p>
          </div>
          <button className="mt-6 py-2 px-4 border-2 text-white text-lg font-bold hover:bg-tertiary ">Get Started</button>
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-6" id="preferences">
        <h1 className="pl-6 pt-6 text-4xl font-medium">
          <span className="text-tertiary">Choose </span>
          <span className="text-secondary">Your </span>
          <span className="text-tertiary">Branch</span>
        </h1>
        <form id="schemeForm" name="schemeForm" onSubmit={handleSubmit} className="w-1/2 rounded-lg p-6  flex flex-col justify-between">
        {/* Branch Selection */}
        <div className="mb-4">
            {/* <label className="block text-gray-700 text-xl font-medium mb-2">Choose your Branch</label> */}
            <div className="flex flex-col space-y-2 text-lg">
              <div>
                <input
                  type="radio"
                  id="branch1"
                  name="branch"
                  value="CSE"
                  checked={formData.branch === "CSE"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch1"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "CSE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Computer Science Engineering
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="branch2"
                  name="branch"
                  value="ECE"
                  checked={formData.branch === "ECE"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch2"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "ECE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Electronics and Communication Engineering
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="branch3"
                  name="branch"
                  value="EEE"
                  checked={formData.branch === "EEE"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch3"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "EEE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Electrical and Electronics Engineering
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="branch4"
                  name="branch"
                  value="ME"
                  checked={formData.branch === "ME"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch4"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "ME" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Mechanical Engineering
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="branch5"
                  name="branch"
                  value="CE"
                  checked={formData.branch === "CE"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch5"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "CE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Civil Engineering
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="branch6"
                  name="branch"
                  value="IT"
                  checked={formData.branch === "IT"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch6"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "IT" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  Information Technology
                </label>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className=" py-2 px-4 bg-transparent text-black border-2 border-gray-700 text-lg hover:bg-green-600 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <NavLink to="/gate-list">Next</NavLink>
          </button>

        </form>

        </div>
    </div>
  )
}

export default Gate
