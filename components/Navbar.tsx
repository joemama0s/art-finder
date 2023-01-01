import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { useUser } from "./../lib/context";
import Image from "next/image";
import { logOutUser } from "../lib/firebase";

function Navbar() {
  const { user, setUser } = useUser();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {user?.username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li></li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {user ? (
          <>
            <li>
              {" "}
              <p>{user.username}</p>
            </li>
            <li>
              <button
                className="btn-blue"
                onClick={() => {
                  logOutUser();
                }}
              >
                {" "}
                log out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
