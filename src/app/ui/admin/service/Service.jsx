import React from "react";
import Card from "./Card.jsx";

const Service = ({ cat }) => {
  const { services } = cat;

  return (
    <div className="text-black flex gap-3 flex-wrap">
      {services.map((service) => (
        <Card service={service} />
      ))}
    </div>
  );
};

export default Service;
