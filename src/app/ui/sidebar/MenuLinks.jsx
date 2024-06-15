import Link from "next/link.js";
import React from "react";

const MenuLinks = ({ link }) => {
  return (
    <li className="p-2   rounded-lg hover:bg-slate-600">
      <Link href={link}>{link}</Link>
    </li>
  );
};

export default MenuLinks;
