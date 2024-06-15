import React from "react";
import Logo from "../logo/Logo.jsx";
import Link from "next/link.js";
import { BiCategory } from "react-icons/bi";
import MenuLinks from "./MenuLinks.jsx";
import { categorieItems } from "@/lib/utils.js";

const Sidebar = () => {
  return (
    <div className="sticky top-2">
      <Logo />
      <div className="pt-10">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BiCategory />
          Catégories
        </h2>
        <ul className="pl-2 flex flex-col gap-2 pt-5">
          {categorieItems.map((link, index) => (
            <MenuLinks key={index} link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
