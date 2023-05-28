import React from 'react';
import CardArtWithDetails from "components/Cards/CardArtWithDetails";

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

export default function Art() {
    return (
      <>
      <IndexNavbar fixed />
        <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
        
      <CardArtWithDetails />
    </div>
    </div>
    </div>
    <Footer />
      </>
    );
  }
  