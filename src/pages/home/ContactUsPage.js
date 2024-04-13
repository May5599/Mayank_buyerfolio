import React from 'react';
import Navbar from "../Navbar";
import ContactCompOne from '../../components/contactuscomp/ContactCompOne/ContactCompOne';
import FAQ from "../../components/faq/FAQ";
import GetConnected from '../../components/getconnected/GetConnected';
function ContactUsPage() {
  return (
    <div>
      <Navbar/>
      <ContactCompOne/>
      <FAQ/>
      <GetConnected/>
    </div>
    
  );
}

export default ContactUsPage;
