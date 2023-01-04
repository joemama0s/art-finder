import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { useUser } from "./../lib/context";
import Image from "next/image";
import { logOutUser } from "../lib/firebase";

function Navbar() {
  const { user, setUser } = useUser();

  console.log("User from navbar", user);

  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto max-w-4xl flex items-center justify-between">
        <div className="flex-grow">
          <Link href="/">
            <a className="text-xl text-white font-bold no-underline">My App</a>
          </Link>
        </div>
        <div>
          {user ? (
            <div>
              <p>signed in as {user.username}</p>
              <button
                onClick={() => logOutUser()}
                className="w-16 h-12 p-2 font-bold text-sm text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal active:bg-teal-800 transition duration-300 ease-in-out hover:bg-teal-600"
              >
                logout
              </button>
            </div>
          ) : (
            <div>
              <Link href="/login">
                <button className="w-16 h-12 p-2 font-bold text-sm text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal active:bg-teal-800 transition duration-300 ease-in-out hover:bg-teal-600">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
