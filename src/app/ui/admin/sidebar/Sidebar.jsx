"use client";
import React from "react";
import Menulinks from "./Menulinks.jsx";
import Logo from "../../logo/Logo.jsx";
import { usePathname } from "next/navigation.js";
import { categorieItems } from "@/lib/utils.js";
import CategorieLink from "./CategorieLink.jsx";

const AdmainSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-2">
      <Logo />
      <div className="pl-2 flex flex-col gap-2 pt-5">
        <Menulinks name={"utilisateurs"} link="/admin/utilisateurs" />
        <Menulinks name={"catégories"} link="/admin/categories" />

        {pathname.startsWith("/admin/categories") &&
          categorieItems.map((cat, index) => (
            <CategorieLink key={index} cat={cat} />
          ))}
      </div>
    </div>
  );
};

export default AdmainSidebar;
