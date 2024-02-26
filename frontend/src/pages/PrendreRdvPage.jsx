import React from "react";
import Bandeau from "../components/Bandeau";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";

function PrendreRdvPage() {
  return (
    <div className="PrendreRdvPage-page">
      <Bandeau />
      <Navbar />
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="footerContentHonorairesCustom">
        <Footer />
      </div>
    </div>
  );
}

export default PrendreRdvPage;
