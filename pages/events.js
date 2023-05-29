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

  useEffect(() => {
    if (data && data.events) {
      setEvents(data.events);
    }
  }, [data]);
  return (
    <>
    <IndexNavbar fixed />
    <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Street Art Events</h2>
          <h2 className="text-xl  text-gray-900 ">Collection of events from across the globe for you.
          Step into a world where the streets come alive with creativity and imagination.</h2>
          <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {events.map((event) => (
              <a href={event.link} target="_blank" rel="noopener noreferrer"> 
              <div key={event.id} className=" group relative  border bg-white  ">
                <div className="relative w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={event.picture}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap border-b-1 py-2">
                <div className="w-4/12 px-4">
                  <h3 className="mt-2  text-gray-900">
                  <p className="text-base text-blueGray-400 text-center">{new Date(event.start).toLocaleString('default', { month: 'long' })}</p>
                  <p className="text-xl text-red-500 text-center ">{new Date(event.start).toLocaleString('default', { day: 'numeric' })}</p>
                  </h3>
                </div>
                <div className="w-8/12 px-4">
                <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                  <p className="text-base  text-blueGray-400">{event.city}, {event.country}</p>
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
