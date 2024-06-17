"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

const MenuLinks = ({ cat }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/categories/${cat.id}`}
      className={`p-2 w-full text-sm text-slate-100 hover:text-white hover:border-l-2 border-textPrimary ${
        pathname === `/categories/${cat.id}` &&
        "text-white opacity-100 font-semibold border-l-2 border-textPrimary"
      }`}
    >
      {cat.name}
    </Link>
  );
};

export default MenuLinks;
