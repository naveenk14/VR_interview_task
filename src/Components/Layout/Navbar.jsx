import {
  Search,
  Menu,
  Settings,
  BellDot,
  Grip,
  ChevronDown,
} from "lucide-react";
import { Profile, Flag } from "../../Assets";

const Navbar = ({ setOpen }) => {
  return (
    <header className="h-14 bg-white shadow flex items-center justify-between p-4 rounded-xl z-10">
      <div className="flex items-center">
        <Menu
          color="#586A84"
          className="cursor-pointer relative"
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className="flex flex-1 items-center text-primary-light bg-[#F2F6FA] ms-1 md:ms-5 px-3 rounded">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search here..."
            className="md:ms-2 py-1 outline-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-between gap-1">
          <div className="hidden sm:flex items-center">
            <img src={Flag} alt="flag" className="w-5 h-4 me-2" />
            <span className="text-primary-light text-[14px]">English</span>
          </div>
          <ChevronDown size={14} color="#586A84" />
        </div>
        <Grip size={16} color="#586A84" />
        <BellDot size={16} color="#586A84" />
        <Settings size={16} color="#586A84" />
        <img src={Profile} alt="profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;
