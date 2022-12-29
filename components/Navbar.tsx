import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import Image from "next/image";

function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                {/* <img src={user?.photoURL} /> */}
                <a>
                  <Image
                    src="/../public/google.png"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />{" "}
                </a>
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
        {username && <h1>{username}</h1>}
      </ul>
    </nav>
  );
}

export default Navbar;
