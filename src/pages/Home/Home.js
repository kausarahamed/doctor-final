import React from "react";
import Bannar from "./Bannar";
import Info from "./Info";
import Info2 from "./Services/Info2";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="px-12">
      <Bannar></Bannar>
      <Info></Info>
      <Services></Services>
      <Info2></Info2>
    </div>
  );
};

export default Home;
