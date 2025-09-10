import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  console.log(menuRef);

  useEffect(() => {
    function handleClickOutside(event) {
      if (window.innerWidth < 768) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpen(false); // close when clicking outside
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      {open && <Sidebar ref={menuRef} />}
      <div className="flex-1 flex flex-col m-3">
        <Navbar setOpen={setOpen} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
