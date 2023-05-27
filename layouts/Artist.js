import React from "react";

// components

import ArtistNavbar from "components/Navbars/ArtistNavbar.js";
import ArtistSidebar from "components/Sidebar/ArtistSidebar.js";
import HeaderStatsArtist from "components/Headers/HeaderStatsArtist.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Artist({ children }) {
  return (
    <>
      <ArtistSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
      <HeaderStatsArtist />
        <ArtistNavbar />
        {/* Header */}      
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
