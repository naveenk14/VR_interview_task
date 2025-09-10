import { useState } from "react";
import {
  Home,
  Calendar,
  MessageSquare,
  ShoppingCart,
  Mail,
  Folder,
  Users,
  Layers,
  Lock,
} from "lucide-react";
import { Logo } from "../../Assets";
import { forwardRef } from "react";

const menuItems = [
  { label: "Dashboards", icon: <Home size={18} />, active: true },
  { label: "Calendar", icon: <Calendar size={18} /> },
  { label: "Chat", icon: <MessageSquare size={18} /> },
  { label: "E-Commerce", icon: <ShoppingCart size={18} /> },
  { label: "E-Mail", icon: <Mail size={18} /> },
  { label: "Projects", icon: <Folder size={18} /> },
  { label: "Social", icon: <Users size={18} /> },
  { label: "File Manager", icon: <Folder size={18} /> },
  { label: "Pages", icon: <Layers size={18} /> },
  { label: "UI Components", icon: <Layers size={18} /> },
  { label: "Authentication", icon: <Lock size={18} /> },
];

const Sidebar = forwardRef((props, ref) => {
  const [active, setActive] = useState("Dashboards");

  return (
    <div
      ref={ref}
      className="absolute w-100 top-20 md:relative md:top-0 md:w-50 lg:w-60 bg-white theme-bg theme-text shadow-md flex flex-col p-4 rounded-xl m-3 z-40"
    >
      <div className="flex items-center gap-2 mb-4">
        <img src={Logo} />
        <span className="font-bold text-lg text-primary-dark">Light</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-3 w-full text-sm p-4 md:p-3 rounded-lg transition-colors cursor-pointer ${
                  active === item.label
                    ? "bg-[#E5F3FF] text-primary-dark font-medium"
                    : "text-primary-light hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

export default Sidebar;
