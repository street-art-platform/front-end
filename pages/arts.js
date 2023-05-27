/* eslint-disable react/jsx-no-target-blank */
import React,{ useState, useEffect } from 'react';
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { gql, useQuery } from '@apollo/client';

const GET_ALL_ARTS = gql`
  query {
    street_arts {
      id
      title
      address
      city
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
  const [arts, setArts] = useState([]);

  useEffect(() => {
    if (data && data.street_arts) {
      setArts(data.street_arts);
    }
  }, [data]);

  return (
    <>
      <IndexNavbar fixed />
      <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Street Arts</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {arts.map((art) => (
              <div key={art.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={art && art.pictures && art.pictures[0] && art.pictures[0].link}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                <Link href={`/art?id=${art.id}`}>
                  <a>
                    <span className="absolute inset-0" />
                    {art.title}
                  </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{art.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
