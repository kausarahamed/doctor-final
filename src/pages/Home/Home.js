import React from "react";
import MakeApointment from "../MakeApointment/MakeApointment";
import Bannar from "./Bannar";
import Info from "./Info";
import Info2 from "./Services/Info2";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Info></Info>
      <Services></Services>
      <Info2></Info2>
      <MakeApointment></MakeApointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
