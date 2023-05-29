import React, { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

// layout for page
import Auth from "layouts/Auth.js";

const REGISTER_USER = gql`
mutation InsertUsers($gender: String, $email: String, $first_name: String, $last_name: String, $useraname: String, $phone: String, $birth_date: date, $city: String, $street: String, $post_code: String, $country: String, $profile_picture: String, $latitude: String, $longitude: String, $role: String, $modified_at: timestamptz) {
  insert_users(objects: {gender: $gender, email: $email, first_name: $first_name, last_name: $last_name, useraname: $useraname, phone: $phone, birth_date: $birth_date, city: $city, street: $street, post_code: $post_code, country: $country, profile_picture: $profile_picture, latitude: $latitude, longitude: $longitude, role: $role, modified_at: $modified_at}) {
    affected_rows
    returning {
      gender
			email
			first_name
			last_name
			useraname
			phone
			birth_date
			city
			street
			post_code
			country
			profile_picture
			latitude
			longitude
			role
			created_at
			modified_at
			id
    }
  }
}
`;


export default function Register() {
  const router = useRouter();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const role = isArtist ? "artist" : "tourist";
      const modified_at = new Date().toISOString(); // Generate current timestamp
  
      const { data } = await registerUser({
        variables: {
          first_name,
          last_name,
          email,
          password,
          role,
          modified_at, // Pass the generated timestamp
        },
      });
  
      console.log("Registration successful!", data);
  
      // Redirect the user to a success page or another route
      router.push("/auth/login");
    } catch (error) {
      console.error("Registration failed!", error);
    }
  };
  

  return (
    <>
      <div className=" mx-8 px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 gap-x-px py-16">
            <div className="relative px-6 py-6 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    SIGN UP
                  </h6>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=" Frist Name"
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        checked={isArtist}
                        onChange={(e) => setIsArtist(e.target.checked)}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I am an artist
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {loading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
