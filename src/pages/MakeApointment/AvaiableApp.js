import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvaiableApp = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            // setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default AvaiableApp;
