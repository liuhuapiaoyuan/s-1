import { Home, ClipboardList, Bookmark, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "首页", path: "/" },
    { icon: ClipboardList, label: "任务", path: "/tasks" },
    { icon: Bookmark, label: "模板", path: "/templates" },
    { icon: User, label: "我的", path: "/profile" },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center w-full flex-shrink-0 z-50 relative">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center p-2 w-16 transition-colors",
              isActive ? "text-[#3B5BDB]" : "text-gray-400"
            )}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
