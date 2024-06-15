import { Avatar } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { SlLike } from "react-icons/sl";

const AdminNavbar = () => {
  return (
    <div className="bg-bgSecondary flex rounded-xl p-3 items-center justify-between">
      <h1 className="text-xl font-bold text-textPrimary">Monbusiness</h1>
      <div className="w-[300px] h-full bg-bgthird p-3 py-2 rounded-lg flex items-center gap-3">
        <CiSearch className="text-textPrimary text-2xl font-bold" />
        <input
          type="text"
          placeholder="rechercher..."
          className="h-[100%] border-none outline-none bg-transparent text-textPrimary"
        />
      </div>
      <div className="flex gap-3">
        {/* <div className="flex items-center gap-1 text-textPrimary ">
          <SlLike className="font-bold text-lg" />
          <small>(36)</small>
        </div> */}
        <Avatar
          className="bg-textPrimary"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </div>
    </div>
  );
};

export default AdminNavbar;
