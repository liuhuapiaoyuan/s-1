import { Search, ChevronRight, FileText, CheckCircle2, Clock, Activity, Edit, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Tasks() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("全部");

  const historyTasks = [
    { id: 1, name: "高二日语作文周测-第8周", date: "2024/05/18 08:30", count: 42, avgScore: 78.5, status: "已完成", iconBg: "bg-blue-50", iconColor: "text-blue-500", icon: FileText },
    { id: 2, name: "N3写作练习-春游主题", date: "2024/05/16 14:20", count: 36, avgScore: 81.0, status: "已完成", iconBg: "bg-teal-50", iconColor: "text-teal-500", icon: CheckCircle2 },
    { id: 3, name: "高一命题作文-我的假期", date: "2024/05/14 10:15", count: 40, avgScore: 74.5, status: "待审核", iconBg: "bg-orange-50", iconColor: "text-orange-500", icon: Edit },
    { id: 4, name: "N4写作练习-自我介绍", date: "2024/05/12 16:45", count: 38, avgScore: 79.0, status: "已完成", iconBg: "bg-purple-50", iconColor: "text-purple-500", icon: Play },
    { id: 5, name: "高三模拟作文-环境保护", date: "2024/05/10 09:20", count: 45, avgScore: 83.2, status: "已完成", iconBg: "bg-indigo-50", iconColor: "text-indigo-500", icon: Clock },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full pb-6">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-50 pt-12 pb-3">
        <div className="px-4 mb-4">
          <h1 className="font-bold text-2xl text-gray-900 tracking-tight">历史任务</h1>
        </div>

        <div className="px-4">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="搜索任务名称" 
                className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-400"
              />
           </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Tabs */}
         <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
            {['全部', '待审核', '已完成', '有课堂分析'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 text-[13px] font-medium rounded-full transition-all whitespace-nowrap",
                  activeTab === tab ? "bg-[#3B5BDB] text-white shadow-md shadow-blue-500/20" : "bg-white text-gray-600 border border-gray-200"
                )}
              >
                {tab}
              </button>
            ))}
         </div>

         {/* Task List */}
         <div className="space-y-4">
           {historyTasks.map(task => (
             <div 
               key={task.id}
               onClick={() => navigate(`/tasks/${task.id}`)}
               className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 block cursor-pointer hover:bg-gray-50 transition-colors"
             >
               <div className="flex items-start justify-between mb-3">
                 <div className="flex gap-3">
                    <div className={cn("p-2.5 rounded-xl h-fit w-fit", task.iconBg, task.iconColor)}>
                      <task.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-[15px] max-w-[200px] truncate font-bold text-gray-900 leading-snug">{task.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                        <Clock size={12}/> {task.date}
                      </div>
                    </div>
                 </div>
                 <span className={cn(
                   "text-[11px] font-medium px-2.5 py-1 rounded-md",
                   task.status === '待审核' ? "text-orange-500 bg-orange-50" : "text-teal-600 bg-teal-50"
                 )}>
                   {task.status}
                 </span>
               </div>
               
               <div className="grid grid-cols-[1fr_1.2fr_0.8fr] gap-2 pt-3 border-t border-gray-50 items-center">
                 <div className="flex flex-col">
                   <div className="flex items-center gap-1 text-gray-400 text-xs mb-0.5">
                     <FileText size={12} className="text-blue-400"/> 作文数量
                   </div>
                   <div className="text-[15px] font-bold text-gray-900">{task.count} <span className="text-xs font-normal text-gray-500">篇</span></div>
                 </div>
                 <div className="flex flex-col border-l border-gray-100 pl-3">
                   <div className="flex items-center gap-1 text-gray-400 text-xs mb-0.5">
                     <Activity size={12} className="text-purple-400"/> 平均得分
                   </div>
                   <div className="text-[15px] font-bold text-[#3B5BDB]">{task.avgScore}</div>
                 </div>
                 <div className="flex items-center justify-end text-xs text-gray-400">
                   查看报告 <ChevronRight size={14} className="ml-0.5" />
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}
