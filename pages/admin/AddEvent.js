import React from "react";

// components

import CardEvent from "components/Cards/CardEvent.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function AddPost() {
  return (
    <>
   
      <div className="flex flex-wrap ">
      
        <div className="w-full place-content-center px-4">
          <CardEvent />
        </div>
        
      </div>
    </>
  );
}
