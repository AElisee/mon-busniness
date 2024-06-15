import Image from "next/image";
import Sidebar from "./ui/sidebar/Sidebar.jsx";
import Navbar from "./ui/navbar/Navbar.jsx";
import Footer from "./ui/Footer.jsx";

export default function Home() {
  return (
    <div className="flex min-h-[100vh]">
      <div className="w-1/5 p-5 bg-bgPrimary">
        <Sidebar />
      </div>
      <div className="w-4/5 p-5 bg-bgthird">
        <Navbar />
        <p>content</p>
        <Footer />
      </div>
    </div>
  );
}
