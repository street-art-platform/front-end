import React from "react";

// components

import CardPost from "components/Cards/CardPost.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function AddPost() {
  return (
    <>
   
      <div className="flex flex-wrap">
      
        <div className="w-full  px-4">
          <CardPost />
        </div>
        
      </div>
    </>
  );
}

