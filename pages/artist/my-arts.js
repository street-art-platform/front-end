/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardEvents from "components/Cards/CardEvents";

// layout for page

import Artist from "layouts/Artist.js";
const callouts = [
  {
    name: 'City and the River',
    description: 'Work from home accessories',
    imageSrc: '../img/arts/art.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
    day: '10',
    month: 'may',
  },
  {
    name: 'Breakone , Colorful City',
    description: 'Journals and note-taking',
    imageSrc: '../img/arts/art2.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    day: '15',
    month: 'June',
  },
  {
    name: 'Pantya Bea , Color City',
    description: 'Daily commute essentials',
    imageSrc: '../img/arts/art3.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    day: '24',
    month: 'April',
  },
 
  {
    name: 'Travel2',
    description: 'Daily commute essentials',
    imageSrc: '../img/arts/art4.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    day: '24',
    month: 'April',
  },
  {
    name: 'Travel3',
    description: 'Daily commute essentials',
    imageSrc: '../../img/arts/art5.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    day: '24',
    month: 'April',
  },
  {
    name: 'Travel4',
    description: 'Daily commute essentials',
    imageSrc: '../img/arts/art_1.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    day: '24',
    month: 'April',
  },
]

export default function MyArts() {
  return (
    <>
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My Street Arts : Approved</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            ><Link
                href={{
                  pathname: 'add-art',
                  // query: { name: 'test' },
                }}
              >
              Add new Art</Link>
            </button>
          </div>
        </div>


          <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {callouts.map((callout) => (
              <a href={callout.href}> 
              <div key={callout.name} className=" group relative  border bg-white mb-6">
                <div className="relative w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap border-b-1 py-3">
                
                  <div className="w-8/12 px-4">
                  <p className="text-m font-semibold text-gray-900">{callout.name}</p>
                  
                  </div>
                  <div className="w-4/12 px-4">
                    <button className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Update
                    </button>
                  </div>
              </div>
 
              </div>
              </a>
            ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
MyArts.layout = Artist;