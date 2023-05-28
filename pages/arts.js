/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

import { gql, useQuery } from '@apollo/client';

const GET_ALL_ARTS = gql`
  query {
    street_arts {
      id
      title
      address
      city
      street
      created_at
      is_approved
      description
      pictures {
        link
      }
      user {
        first_name
        last_name
      }
    }
  }
`;

export default function Arts() {
  const { loading, error, data } = useQuery(GET_ALL_ARTS);
  const [arts, setArts] = useState([]); // Rename events to arts

  useEffect(() => {
    if (data && data.street_arts) {
      setArts(data.street_arts); // Rename events to arts
    }
  }, [data]);

  return (
    <>
      <IndexNavbar fixed />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Street Arts</h2>
            <h2 className="text-xl  text-gray-900 ">Embark on a captivating journey through a curated collection of breathtaking street arts from around the world, where creativity and self-expression take center stage.</h2>
            <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
              {arts.map((art) => (
              <a  href={`/art?id=${art.id}`} target="_blank">  
                <div key={art.id} className=" group relative  border  bg-white  ">
                  <div className="relative w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                        src={art && art.pictures && art.pictures[0] && art.pictures[0].link}
                        className="h-full w-full object-cover object-center"
                      />
                  </div>
                  <div className="flex flex-wrap border-b-1 py-2">
                      <div className="w-3/12 px-4">
                        <div className="mt-2 text-gray-900">
                        <p className="text-base text-blueGray-600">{art.city}</p>
                        {/* <p className="text-base text-red-500 text-center ">{art.street.substring(0, 10) + "..." }</p> */}
                        </div>
                      </div>
                      <div className="w-9/12 px-4">
                      <p className="text-l font-semibold text-gray-900">{art.title.length > 35? (art.title.charAt(0).toUpperCase() + art.title.slice(1).toLowerCase()).substring(0, 35) + "..." :art.title.charAt(0).toUpperCase() + art.title.slice(1).toLowerCase() }</p>
                      <p className="text-base text-red-500 ">{art.street.substring(0, 20) + "..." }</p>
                        {/* <p className="text-base  text-blueGray-400">{art.description.length > 50? art.description.substring(0, 50) + "..." 
                        : art.description 
                      }</p> */}
                      </div>
                      </div>
                    </div>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
