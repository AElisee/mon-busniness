"use client"
import { useRouter } from "next/navigation.js";
import React from "react";

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex items-start justify-center">
      <h1 className="text-2xl font-bold uppercase text-textPrimary cursor-pointer" onClick={handleClick}>mb</h1>
    </div>
  );
};

export default Logo;
