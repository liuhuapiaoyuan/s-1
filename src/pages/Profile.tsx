import { ChevronRight, Settings, Users, Bookmark, HelpCircle, Info, LogOut, Award, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Settings, label: "账号设置", color: "text-gray-600", bg: "bg-gray-100", path: "/settings" },
    { icon: Users, label: "班级与学生管理", color: "text-blue-500", bg: "bg-blue-50", path: "/classes" },
    { icon: Bookmark, label: "我的收藏模板", color: "text-indigo-500", bg: "bg-indigo-50", path: "/templates" },
    { icon: HelpCircle, label: "帮助与客服", color: "text-teal-500", bg: "bg-teal-50", path: "/help" },
    { icon: Info, label: "关于日语批改助手", color: "text-purple-500", bg: "bg-purple-50", path: "/about" },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col relative w-full">
      {/* Top Banner - extended for avatar overlap */}
      <div className="bg-gradient-to-br from-[#3B5BDB] to-[#1E3A8A] h-48 w-full absolute top-0 left-0 z-0 rounded-b-[2.5rem] shadow-lg shadow-blue-900/20 overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 opacity-20 bg-[url('https://api.iconify.design/noto:fuji-mountain.svg')] bg-no-repeat bg-right-top bg-contain"></div>
         <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 px-4 pt-16">
        <h1 className="text-white text-xl font-bold mb-8 px-2">我的</h1>

        {/* User Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6 relative">
           <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                 <div className="relative">
                   <div className="w-16 h-16 rounded-2xl bg-blue-100 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="avatar" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-400 to-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md border-2 border-white shadow-sm flex items-center gap-0.5">
                      <Award size={10} /> 高级
                   </div>
                 </div>
                 <div className="pt-1">
                    <h2 className="text-[18px] font-bold text-gray-900 mb-1">王老师</h2>
                    <p className="text-xs text-gray-500 font-medium">账号：wang_sensei123</p>
                 </div>
              </div>
              <button className="text-xs text-[#3B5BDB] font-bold bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                编辑个人资料
              </button>
           </div>

           {/* Stats */}
           <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-50">
              <div className="flex flex-col items-center">
                 <span className="text-xl font-bold text-gray-900 mb-0.5">1,208</span>
                 <span className="text-[11px] text-gray-500">累计批改</span>
              </div>
              <div className="flex flex-col items-center border-l border-gray-50">
                 <span className="text-xl font-bold text-gray-900 mb-0.5">3</span>
                 <span className="text-[11px] text-gray-500">管理班级</span>
              </div>
              <div className="flex flex-col items-center border-l border-gray-50">
                 <span className="text-xl font-bold text-gray-900 mb-0.5">15</span>
                 <span className="text-[11px] text-gray-500">自建模板</span>
              </div>
           </div>
        </div>

        {/* Member Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 shadow-lg mb-6 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-amber-200 to-yellow-500 p-2 rounded-xl text-yellow-900">
                 <Award size={20} className="fill-current" />
              </div>
              <div>
                 <div className="text-yellow-500 text-[14px] font-bold mb-0.5">专业版教研会员</div>
                 <div className="text-gray-400 text-[11px]">专享不限次作文批改与学情导出</div>
              </div>
           </div>
           <button className="bg-yellow-500 hover:bg-yellow-400 text-yellow-950 text-xs font-bold px-3 py-1.5 rounded-full transition-colors shadow-sm">
              续费升级
           </button>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
           <div className="divide-y divide-gray-50">
              {menuItems.map((item, i) => (
                <div key={i} onClick={() => item.path && navigate(item.path)} className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors active:bg-gray-100">
                   <div className="flex items-center gap-3">
                      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", item.bg, item.color)}>
                         <item.icon size={18} />
                      </div>
                      <span className="text-[14px] font-medium text-gray-800">{item.label}</span>
                   </div>
                   <ChevronRight size={18} className="text-gray-300" />
                </div>
              ))}
           </div>
        </div>

        {/* Logout */}
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-red-50 text-red-500 font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-red-50 transition-colors active:bg-red-100 mb-6"
        >
           <LogOut size={18} />
           退出登录
        </button>

        <div className="text-center pb-6">
           <p className="text-[10px] text-gray-400">日语作文批改助手 v1.0.0</p>
        </div>
      </div>
    </div>
  );
}
