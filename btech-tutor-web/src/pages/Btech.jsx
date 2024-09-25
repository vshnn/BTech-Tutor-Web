import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Btech() {
  const [formData, setFormData] = useState({
    scheme: "",
    branch: "",
    semester: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const schemeYear = formData.scheme === "Scheme A" ? 2019 : 2024;
      const queryParams = new URLSearchParams({
        depname: formData.branch.toLowerCase(),
        semnum: formData.semester,
        scheme: schemeYear,
      });

      const response = await fetch(
        `https://btechtutors.onrender.com/api/get_subjects/?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Error fetching subjects");
      }

      const subjects = await response.json();
      console.log("Subjects fetched:", subjects);

      // Redirect to list page with subjects data (pass subjects as state)
      navigate("/list", { state: { 
        subjects,
        scheme: formData.scheme, 
        branch: formData.branch, 
        semester: formData.semester 
      }});
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  return (
    <div className="font-body w-full mx-auto">
      <div className="bg-secondary mx-auto text-white">
        <div className="w-4/5 mx-auto py-12">
          <h1 className="text-sm font-bold text-tertiary">B.TECH</h1>
          <div className="mt-5 w-3/5 text-lg ">
            <h1 className="font-medium text-5xl mb-6">
              Tailored academic resources for B.Tech students
            </h1>
            <p>Access notes, syllabus, and previous year question papers.</p>
          </div>
          <button className="mt-6 py-2 px-4 border-2 text-white text-lg font-bold hover:bg-tertiary">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-6" id="preferences">
        <h1 className="pl-6 pt-6 text-4xl font-medium">
          <span className="text-tertiary">Choose </span>
          <span className="text-secondary">Your </span>
          <span className="text-tertiary">Preferences</span>
        </h1>
        <form id="schemeForm" name="schemeForm" onSubmit={handleSubmit} className="w-1/2 rounded-lg p-6 flex flex-col justify-between">

          {/* Scheme Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-medium mb-2">Choose your Scheme</label>
            <div className="flex space-x-2 text-lg">
              <div>
                <input
                  type="radio"
                  id="schemeA"
                  name="scheme"
                  value="Scheme A"
                  checked={formData.scheme === "Scheme A"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="schemeA"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.scheme === "Scheme A" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  BTech 2019
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="schemeB"
                  name="scheme"
                  value="Scheme B"
                  checked={formData.scheme === "Scheme B"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="schemeB"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.scheme === "Scheme B" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  BTech 2024
                </label>
              </div>
            </div>
          </div>

          {/* Branch Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-medium mb-2">Choose your Branch</label>
            <div className="flex flex-wrap space-x-2 text-lg">
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
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "CSE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
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
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch2"
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "ECE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
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
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch3"
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "EEE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
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
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch4"
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "ME" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
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
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch5"
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "CE" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
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
                  className="hidden"
                  required
                />
                <label
                  htmlFor="branch6"
                  className={`block w-16 px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.branch === "IT" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  IT
                </label>
              </div>
            </div>
          </div>


          {/* Semester Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-medium mb-2">Choose your Semester</label>
            <div className="flex space-x-2 text-lg">
              <div>
                <input
                  type="radio"
                  id="semester1"
                  name="semester"
                  value="1"
                  checked={formData.semester === "1"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester1"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "1" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S1 & S2
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester3"
                  name="semester"
                  value="3"
                  checked={formData.semester === "3"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester3"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "3" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S3
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester4"
                  name="semester"
                  value="4"
                  checked={formData.semester === "4"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester4"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "4" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S4
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester5"
                  name="semester"
                  value="5"
                  checked={formData.semester === "5"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester5"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "5" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S5
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester6"
                  name="semester"
                  value="6"
                  checked={formData.semester === "6"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester6"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "6" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S6
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester7"
                  name="semester"
                  value="7"
                  checked={formData.semester === "7"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester7"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "7" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S7
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="semester8"
                  name="semester"
                  value="8"
                  checked={formData.semester === "8"}
                  onChange={handleChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="semester8"
                  className={`block px-4 py-2 rounded-lg cursor-pointer text-white text-center ${formData.semester === "8" ? 'bg-tertiary' : 'bg-secondary hover:bg-tertiary'}`}
                >
                  S8
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-4/5 py-2 px-4 bg-transparent text-black border-2 border-gray-700 text-lg hover:bg-secondary hover:text-white hover:border-white focus:outline-none focus:ring-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Btech;
