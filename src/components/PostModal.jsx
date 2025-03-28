// src/components/PostModal.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Image } from "lucide-react";

  const PostModal = ({ setIsModelOpen }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [postText, setPostText] = useState("");
  const [file, setFile] = useState(null);
  const platforms = [
    { id: "facebook", icon: faFacebookF },
    { id: "instagram", icon: faInstagram },
    { id: "linkedin", icon: faLinkedinIn },
    { id: "tiktok", icon: faTiktok },
    { id: "youtube", icon: faYoutube },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
  
    console.log("Selected Platform:", selectedPlatform);
    console.log("Post Text:", postText);
    console.log("File:", file);
  };

  return (
    <div className="fixed inset-0 z-50  ">
      <form action="/postinfo" onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="w-full h-screen   flex items-center justify-center">
        <div className="bg-white w-full max-w-3xl h-[90vh] rounded-md shadow-lg flex flex-col overflow-hidden px-6 py-3">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <h2 className="text-lg font-semibold">Create Post</h2>
              <div className="flex items-center gap-4">
                {/* <button className="text-sm font-medium hover:underline">Add Tags</button> */}
                <button type="button" onClick={() => setIsModelOpen(false)}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 py-3">
              {platforms.map((platform) => {
                const isSelected = selectedPlatform === platform.id;

                return (
                  <button type='button' 
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 text-lg
                      ${isSelected ? "bg-blue-100 ring-2 ring-blue-500 text-blue-600" : "bg-gray-100 hover:bg-blue-50"}
                    `}
                  >
                    <FontAwesomeIcon icon={platform.icon} />
                  </button>
                );
              })}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-grow p-4 overflow-hidden ">
                {selectedPlatform && (
                    <div className="flex items-center gap-2 mb-2 text-lg font-medium text-gray-700">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={platforms.find(p => p.id === selectedPlatform)?.icon} />
                    </div>
                    </div>
                )}
              {/* Textarea */}
              <textarea 
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="w-full flex-grow border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring focus:border-blue-400 mb-4"
                placeholder="Start writing "
              />

              {/* Media Upload */}
              <div className="flex">
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded p-4 cursor-pointer hover:bg-gray-50 mb-4">
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" className="hidden" />
                        <div className="text-center text-sm text-gray-500 flex flex-col justify-center items-center">
                            <span><Image /></span>
                            <span>Drag & Drop </span> <span className="text-blue-600 underline">or select a file</span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <div className="flex items-center gap-3 text-gray-600">
                {/* Footer tools (emoji, AI, etc.) can go here */}
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                {selectedPlatform
                  ? `Connect ${capitalize(selectedPlatform)} to Post`
                  : "Connect a Channel to Post"}
              </button>
            </div>
        </div>
      </form>
    </div>
  );
};

// Helper to capitalize first letter
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default PostModal;
