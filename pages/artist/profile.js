import React from "react";

// components

import CardSettingsArtist from "components/Cards/CardSettingsArtist.js";
import CardProfileArtist from "components/Cards/CardProfileArtist.js";

// layout for page

import Artist from "layouts/Artist.js";

export default function Profile() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-10">
          <CardSettingsArtist />
        </div>
      </div>
    </>
  );
}

Profile.layout = Artist;
