import React from "react";
import "../css/agentstyle.css";
import Navbar from './Navbar';
import PropHome from "../components/proplist/PropHome";
import Footer from "../components/footer/Footer";

const PropertyList = () => {
  return (
    <div>
      <Navbar />
      <PropHome />
      <Footer />
    </div>
  );
}

export default PropertyList