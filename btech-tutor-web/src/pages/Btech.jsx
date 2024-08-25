import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Btech() {
  const [formData, setFormData] = useState({
    scheme: "",
    branch: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      scheme: "",
      branch: "",
      semester: "",
    });
  };

  return (
    <div className="font-body w-4/5 mx-auto mt-6">
      <h1 className="text-4xl font-semibold mb-4">
        <span className="text-tertiary">Choose </span>
        <span className="text-secondary">Your </span>
        <span className="text-tertiary">Preferences</span>
      </h1>
      <form id="schemeForm" name="schemeForm" onSubmit={handleSubmit} className=" bg-slate-100 shadow-lg shadow-blue-500/50 rounded-lg p-6 flex justify-between">
        
        <div className="w-[50%]">
        {/* Scheme Selection */}
        <div className="mb-4">
          <label htmlFor="scheme" className="block text-gray-700 font-medium mb-2">
            Choose your Scheme
          </label>
          <select
            id="scheme"
            name="scheme"
            value={formData.scheme}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {/* <option value="">Select Scheme</option> */}
            <option value="Scheme A">BTech 2019</option>
            <option value="Scheme B">BTech 2024</option>

          </select>
        </div>

        {/* Branch Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Choose your Branch</label>
          <div className="space-y-2">
            <div>
              <input
                type="radio"
                id="branch1"
                name="branch"
                value="CSE"
                checked={formData.branch === "CSE"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="branch1" className="text-gray-700">
                CSE
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
                className="mr-2"
                required
              />
              <label htmlFor="branch2" className="text-gray-700">
                ECE
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
                className="mr-2"
                required
              />
              <label htmlFor="branch3" className="text-gray-700">
                EEE
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
                className="mr-2"
                required
              />
              <label htmlFor="branch4" className="text-gray-700">
                ME
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
                className="mr-2"
                required
              />
              <label htmlFor="branch5" className="text-gray-700">
                CE
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
                className="mr-2"
                required
              />
              <label htmlFor="branch6" className="text-gray-700">
                IT
              </label>
            </div>
          </div>
        </div>

        {/* Semester Selection */}
        <div className="mb-4">
          <label htmlFor="semester" className="block text-gray-700 font-medium mb-2">
            Choose your semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {/* <option value="">Select Semester</option> */}
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <NavLink to="/list">Next</NavLink>
        </button>
        </div>
        {/* <div className="w-[500px]">
          <img src="https://art.pixilart.com/0d95ab37efbeefe.png" alt="" />
        </div> */}
      </form>
      
    </div>
  );
}

export default Btech;
