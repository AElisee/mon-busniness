import React from "react";
import Card from "./Card.jsx";
import Business from "../business/Business.jsx";
import { businessItems } from "@/lib/utils.js";

const Service = () => {
  return (
    <div className="text-black flex gap-4 flex-wrap pt-5 px-3">
      {businessItems.map((business) => (
        <Business business={business} />
      ))}
    </div>
  );
};

export default Service;
