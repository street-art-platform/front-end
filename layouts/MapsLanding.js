import React from "react";

// components

import Maps from "components/Maps/MapExample";
import Sidebar from "components/Sidebar/Sidebar.js";


export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-0 bg-blueGray-100">
        {/* Header */}
        <Maps/>
      </div>
    </>
  );
}
