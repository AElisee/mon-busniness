"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

const Menulinks = ({ name, link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`p-2 w-full font-bold rounded-lg hover:bg-slate-600 capitalize ${
        pathname.startsWith(link) && "bg-bgPrimarySoft"
      }`}
    >
      {name}
    </Link>
  );
};

export default Menulinks;
