import Image from "next/image";
import Sidebar from "./ui/client/sidebar/Sidebar.jsx";
import Navbar from "./ui/client/navbar/Navbar.jsx";
import Footer from "./ui/Footer.jsx";
import Service from "./ui/client/service/Service.jsx";

export default function Home({ children }) {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-1/5 p-5 bg-bgPrimary">
        <Sidebar />
      </div>
      <div className="w-4/5 p-5 bg-bgthird">
        <Navbar />
        <Service />
        <Footer />
      </div>
    </div>
  );
}
