import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
