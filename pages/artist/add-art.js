import React from "react";

// components

import CardPostArtist from "components/Cards/CardPostArtist.js";
import CardProfile from "components/Cards/CardProfile.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


// layout for page

import Artist from "layouts/Artist.js";

export default function AddArt() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardPostArtist />
        </div>
      </div>
    </>
  );
}

AddArt.layout = Artist;