"use client";
import Image from "next/image.js";
import Link from "next/link.js";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const Business = ({ business, link }) => {
  const [liked, setLike] = useState(false);
  //   console.log(business);

  const handleLike = () => {
    setLike((prevState = () => !prevState));
  };
  return (
    <Link
      href={""}
      className="md:max-w-[300px] md:w-[300px] md:min-h-[280px] rounded-lg flex flex-col bg-bgSecondary "
    >
      <div className="relative h-3/5">
        <Image src="" fill alt="" className="object-cover object-center" />
        <div
          className={`absolute top-3 right-3 z-50 ${
            liked ? "bg-textPrimary" : "bg-bgSecondary"
          }`}
        >
          <BiHeart className="" size={24} />
        </div>
      </div>

      <div className="h-1/3 2/5 p-2 flex flex-col ">
        <h3 className="font-bold text-base">{business.name}</h3>
        <p className="text-xs p-1 ">{business.service}</p>

        <div className="flex mt-3 gap-2 justify-between items-center rounded-md p-2 bg-textPrimary text-white">
          <div className="">
            <p className="flex items-center gap-1">
              <span>
                <GrLocation size={21} />
              </span>
              Abidjan
            </p>
          </div>
          <p className="text-xs">(+225) 07 89 14 13 81</p>
        </div>
      </div>
    </Link>
  );
};

export default Business;
