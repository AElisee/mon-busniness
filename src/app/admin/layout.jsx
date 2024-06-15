import React from "react";
import Footer from "../ui/Footer.jsx";
import Navbar from "../ui/admin/navbar/Navbar.jsx";
import AdmainSidebar from "../ui/admin/sidebar/Sidebar.jsx";
 

const layout = ({ children }) => {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-1/5 p-5 bg-bgPrimary">
        <AdmainSidebar />
      </div>
      <div className="w-4/5 p-5 flex flex-col bg-bgthird">
        <Navbar />
        <div className="h-full flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
