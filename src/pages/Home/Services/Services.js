import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";

const Services = () => {
  const services = [
    { _id: 1, name: "Fluoride Treatment", description: "", img: fluoride },
    { _id: 2, name: "Cavity Filling", description: "", img: cavity },
    { _id: 3, name: "Teeth Whitening", description: "", img: whitening },
  ];
  return (
    <div className="my-28   ">
      <div className="text-center uppercase">
        <h1 className="text-primary font-bold text-xl">Our Services</h1>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
