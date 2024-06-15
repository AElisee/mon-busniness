import Link from "next/link.js";
import React from "react";
import { FcServices } from "react-icons/fc";

const Card = ({ service }) => {
  return (
    <Link
      href=""
      className="p-3 min-w-[300px] h-[70px] w-[300px] bg-bgthird rounded-lg text-black flex gap-2 items-center"
    >
      <FcServices className="text-3xl" />
      <h3 className="text-base font-semibold">{service}</h3>
    </Link>
  );
};

export default Card;
