"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

const CategorieLink = ({ cat }) => {
  const pathname = usePathname();

  // const formatLink = (link) => {
  //   return link
  //     .toLowerCase() // Convertir en minuscules
  //     .normalize("NFD") // Normaliser les caractères en decomposant les accents
  //     .replace(/[\u0300-\u036f]/g, "") // Supprimer les accents
  //     .replace(/\s+/g, "-") // Remplacer les espaces par des tirets
  //     .replace(/[^\w\-]+/g, "") // Supprimer les caractères non alphanumériques sauf les tirets
  //     .replace(/\-\-+/g, "-") // Remplacer les multiples tirets par un seul
  //     .replace(/^-+/, "") // Supprimer les tirets en début de chaîne
  //     .replace(/-+$/, ""); // Supprimer les tirets en fin de chaîne
  // };

  return (
    <Link
      href={`/admin/categories/${cat.id}`}
      className={`p-2 w-full text-sm text-slate-100 hover:text-white hover:border-l-2 border-textPrimary ${
        pathname == `/admin/categories/${cat.id}` &&
        "text-white opacity-100 font-semibold border-l-2 border-textPrimary"
      }`}
    >
      {cat.name}
    </Link>
  );
};

export default CategorieLink;
