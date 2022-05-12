import React, { useState } from "react";
import ApointmentBanner from "./ApointmentBanner";
import AvaiableApp from "./AvaiableApp";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
      <AvaiableApp date={date}></AvaiableApp>
    </div>
  );
};

export default Appointment;
