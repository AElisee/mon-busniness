import React from "react";
import Sidebar from "../ui/client/sidebar/Sidebar.jsx";
import Navbar from "../ui/client/navbar/Navbar.jsx";
import Footer from "../ui/Footer.jsx";

const page = () => {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-1/5 p-5 bg-bgPrimary">
        <Sidebar />
      </div>
      <div className="w-4/5 p-5 bg-bgthird">
        <Navbar />
        <p>slug</p>
        <Footer />
      </div>
    </div>
  );
};

export default page;
