import React from "react";
import Link from "next/link";
// components

import IndexDropdownAccount from "components/Dropdowns/IndexDropdownAccount.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           <a href="https://streetartify.vercel.app"><img src="/img/logo.png" alt="Logo" style={{ height :30, width:163}} /> </a>
            {/* <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Notus NextJS
              </a>
            </Link> */}
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/events"
                >
                  <i className="text-blueGray-400 far fa-calendar-alt text-lg leading-lg mr-2" />{" "}
                  Events
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/arts"
                >
                  <i className="text-blueGray-400 fas fa-paint-brush text-lg leading-lg mr-2" />{" "}
                  Arts
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/maps"
                >
                  <i className="text-blueGray-400 fas fa-map-marked-alt text-lg leading-lg mr-2" />{" "}
                  Explore Map
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#about-us"
                >
                  <i className="text-blueGray-400 fas fa-info-circle text-lg leading-lg mr-2" />{" "}
                  About us
                </a>
              </li>
            </ul>


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstreetartify.vercel.app%2F"
                      target="_blank"
                  >
                    <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Facebook</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20website%20-%20StreetArtify!%20It%20showcases%20amazing%20street%20art%20from%20around%20the%20world.%20Explore%20and%20get%20inspired!%20%20https%3A%2F%2Fstreetartify.vercel.app%2F"
                    target="_blank"
                  >
                    <i className="text-blueGray-400 fab fa-whatsapp text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Whatsapp</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstreetartify.vercel.app%2F&text=Check%20out%20this%20awesome%20website%20-%20StreetArtify!%20It%20showcases%20amazing%20street%20art%20from%20around%20the%20world.%20Explore%20and%20get%20inspired!"
                    target="_blank"
                  >
                    <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>

              <li className="flex items-center">
                <IndexDropdownAccount />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
