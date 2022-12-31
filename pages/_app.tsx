import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import UserContext from "../lib/context";
import type { AppProps } from "next/app";
import { useState } from "react";
import AuthContext from "../lib/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}

export default MyApp;
