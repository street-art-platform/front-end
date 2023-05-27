import React from "react";
import Chart from "chart.js";

export default function CardEvents() {
  
  return (
    <>

<div className="h-150 w-200">
  <div className="h-100">
    <img src="img/arts/art_1.png" alt="Your Image" className="w-150 h-100" />
  </div>
  <div className="h-48">
    <div className="mt-4">
      <button className="p-2 text-2xl text-gray-100 fas fa-heart rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"></button>
      <button className="p-2 text-2xl fas fa-comment text-gray-100 rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"></button>
      <button className="p-2 text-2xl fas fa-share text-gray-100 rounded-md px-4 py-1 mr-2 focus:outline-none mb-1 ease-linear transition-all duration-150"></button>
      <h1 className="text-gray-600 mb-2">100 likes</h1>
    </div>
    <div className="mt-4">
      <div className="flex items-center">
        <img src="img/profile.jpg" className="w-8 h-8 rounded-full" alt="Profile" />
        <textarea
          className="flex-grow px-4 py-2 ml-2 border-none outline-none bg-transparent"
          rows={3}
          placeholder="Add a comment..."
        />
        <button className="text-blue-500 font-semibold bg-transparent border-none">
          Post
        </button>
      </div>
    </div>
  </div>
</div>

     



    



    </>
  );
}
