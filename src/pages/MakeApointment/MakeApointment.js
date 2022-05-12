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
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px] " src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h3 className="text-3xl text-white py-5">Make An Appointment</h3>
        <p className="text-white pb-5">
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
