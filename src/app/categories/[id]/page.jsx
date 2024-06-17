import Service from "@/app/ui/client/service/Service.jsx";
import { categorieItems } from "@/lib/utils.js";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  const cat = categorieItems.find((item) => item.id === parseInt(id));

  return (
    <div className="">
      <h3 className="text-2xl p-3 capitalize font-bold text-textPrimary">
        {cat.name}
      </h3>

      <Service />
    </div>
  );
};

export default page;
