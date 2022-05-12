import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Avaiable
        </p>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date.</span>
          )}
        </p>
        <div class="card-actions justify-center">
          <button
            disabled={slots.length == 0}
            class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
