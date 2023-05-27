import React,{ useState } from "react";
import Link from 'next/link';
import { gql, useMutation } from "@apollo/client";

// LINK TO DB
// Add new art page
// components

const add_art = gql`
mutation($art_input:street_arts_insert_input!) {
  insert_street_arts_one(object:$art_input) {
    id
  }
}
`;
// get values of input 
export default function AddArt() {
    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [post_code, setPostCode] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
    const handleStreetChange = (e) => {
      setStreet(e.target.value);
    };
    const handlePostCodeChange = (e) => {
      setPostCode(e.target.value);
    };
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
    const handleCityChange = (e) => {
      setCity(e.target.value)
    }
  
    const [adding_art] = useMutation(add_art);
    const handle_add_art = async () => {
      try {
        const { data } = await adding_art({
          variables: {
            art_input: {
              title,
              country,
              street,
              address,
              post_code,
              description,
              city,
              user_id:"e6051a65-cf61-4b77-abf6-186044c3eacc",
              pictures: {data: {link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fstreet%2520art%2F&psig=AOvVaw3Gv0vGsZw7xxCxmLS3PSPA&ust=1685282899491000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDH3ZbWlf8CFQAAAAAdAAAAABAE "}}
            },
          },
        });
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
    <div className="flex flex-wrap ">
      
      <div className="w-full place-content-center px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 items-center lg:w-8/12 mx-auto mt-2">
        <div className="relative w-full rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex ">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New Art </h6>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
          <form>
            {/*  Art Title */}

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Give a Title to The Art
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/*  Art Location */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Share with us the Location
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    value={street}
                    onChange={handleStreetChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={handleCountryChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={post_code}
                    onChange={handlePostCodeChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/*  Art Description  + upload image*/}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Describe your art
            </h6>

            <div className="flex flex-wrap">

              {/*  Art Description */}
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"
                >
                </textarea>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              {/*  Upload image*/}
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Upload an image for your art
              </h6>

              <div className="w-full lg:w-12/12 px-4">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <input
                      type="file"
                    />
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                {/* Submit + Cancel adding art RETURN TO INDEXART RATHER ADDING NEW ART OR NOT */}
                <div className="w-full py-4 px-4 flex justify-center">
                  <div className="flex justify-center w-full mb-3">

                    {/* Submit adding art */}
                    <Link href="/arts">
                      <a>
                      <button
                          onClick={handle_add_art}
                          className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                        >
                          Submit
                        </button>
                      </a>
                    </Link> 

                    {/* cancel adding art */}
                     <Link href="/arts"> 
                       <a> 
                        <button
                          onClick={handle_add_art}
                          className=" bg-blueGray-700 active:bg-blueGray-600 bottom-0 right-0 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                        >
                          Cancel
                        </button>
                       </a> 
                     </Link> 

                  </div>
                </div>

              </div>

            </div>

          </form>
        </div>

      </div>
      </div>
      
    </div>
      
    </>
  );
}
