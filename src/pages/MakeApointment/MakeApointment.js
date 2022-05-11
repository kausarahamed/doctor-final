import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";

const MakeApointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 ">
        <img className="mt-[-100px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h3 className="text-3xl text-white text-3xl">Make An Appointment</h3>
        <p className="text-white">
          Find your doctor easily with a minimum of effort. We've kept
          everything organised for you.Ask for an appointment of the doctor
          quickly with almost a single click. We take care of the rest.
        </p>
        <Button>GET STARTS</Button>
      </div>
    </section>
  );
};

export default MakeApointment;
