/* eslint-disable react/jsx-no-target-blank */
import React,{ useState, useEffect } from 'react';
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardEvents from "components/Cards/CardEvents";
import { gql, useQuery } from '@apollo/client';

const GET_ALL_EVENTS = gql`
  query {
    events {
      id
      title
      description
      picture
      address
      city
      country
      link
      start 
      end
      created_at
      
    }
  }
`;

export default function Events() {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  const [events, setEvents] = useState([]);
  return (
    <>
    <IndexNavbar fixed />
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
          <h4 className="text-5xl font-semibold text-gray-900 py-2">Street Art Events</h4>
          <h2 className="text-xl  text-gray-900 ">Collection of events from across the globe for you.
          Step into a world where the streets come alive with creativity and imagination.</h2>
          <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {events.map((event) => (
              <a href={event.link}> 
              <div key={callout.id} className=" group relative  border bg-white  ">
                <div className="relative w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={event.picture}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap border-b-1 py-2">
                <div className="w-4/12 px-4">
                  <h3 className="mt-2  text-gray-900">
                  <p className="text-base text-blueGray-400">{event.start.month}</p>
                  <p className="text-xl text-red-500 text-center ">{event.start.day}</p>
                  </h3>
                </div>
                <div className="w-8/12 px-4">
                <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                  <p className="text-base  text-blueGray-400">{event.description}</p>
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
