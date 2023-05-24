import React from "react";

// components

import CardModifyEvent from "components/Cards/CardModifyEvent.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function ModifyEvent() {
  return (
    <>
   
      <div className="flex flex-wrap">
      
        <div className="w-full  px-4">
          <CardModifyEvent/>
        </div>
        
      </div>
    </>
  );
}
