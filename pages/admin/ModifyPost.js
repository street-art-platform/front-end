import React from "react";

// components

import CardModifyPost from "components/Cards/CardModifyPost.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function ModifyPost() {
  return (
    <>
   
      <div className="flex flex-wrap">
      
        <div className="w-full px-4">
          <CardModifyPost />
        </div>
        
      </div>
    </>
  );
}
