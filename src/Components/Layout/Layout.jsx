import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleSidebar = () => setOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target);
      if (window.innerWidth < 768) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          iconRef.current &&
          !iconRef.current.contains(event.target)
        ) {
          setOpen(false); // this is for close modal when clicking outside
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {open && <Sidebar ref={menuRef} />}
      <div className="flex-1 flex flex-col m-3">
        <Navbar toggleSidebar={toggleSidebar} iconRef={iconRef} />
        <main className="flex-1 overflow-auto hide-scrollbar">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
