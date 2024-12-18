import React from "react";
import { ContactUsComp } from "../../Components/ContactUsComp";
import { FooterComp } from "../../Components/FooterComp";
import { HeaderComp } from "../../Components/HeaderComp";
import { LowestFareComp } from "../../Components/LowestFareComp";
import { ProfessionalExpComp } from "../../Components/ProfessionalExpComp";
import { ServicesComp } from "../../Components/ServiceComp";
import { WorldTourComp } from "../../Components/WorldTourComp";

export const LandingPage = () => {
  return (
    <div className="w-screen h-screen ">
      <ContactUsComp />
      <HeaderComp />
      <ServicesComp />
      <LowestFareComp />
      <ProfessionalExpComp />
       <WorldTourComp /> 
      <FooterComp />
    </div>
  );
};