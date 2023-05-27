import React from "react";

// components

import CardModifyPostArtist from "components/Cards/CardModifyPostArtist.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Artist from "layouts/Artist.js";

export default function AddArt() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardModifyPostArtist />
        </div>
      </div>
    </>
  );
}

AddArt.layout = Artist;