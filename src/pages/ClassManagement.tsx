import { ChevronLeft, Plus, Search, MoreVertical, Users, GraduationCap, ChevronRight, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function ClassManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const classes = [
    { id: 1, name: "高考冲刺1班", studentCount: 32, year: "2024级", avgScore: 85.4, activeRate: 94 },
    { id: 2, name: "N3特训班", studentCount: 15, year: "2024级", avgScore: 92.1, activeRate: 100 },
    { id: 3, name: "基础入门班", studentCount: 28, year: "2023级", avgScore: 78.5, activeRate: 85 },
  ];

  const students = [
    { id: 101, name: "张三", no: "2024001", totalTasks: 15, avgScore: 88, trend: "up" },
    { id: 102, name: "李四", no: "2024002", totalTasks: 14, avgScore: 92, trend: "up" },
    { id: 103, name: "王五", no: "2024003", totalTasks: 15, avgScore: 76, trend: "down" },
    { id: 104, name: "赵六", no: "2024004", totalTasks: 12, avgScore: 85, trend: "flat" },
    { id: 105, name: "陈七", no: "2024005", totalTasks: 15, avgScore: 90, trend: "up" },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">班级与学生</span>
          <button className="w-10 h-10 flex items-center justify-center text-[#3B5BDB] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="搜索班级或学生姓名" 
              className="w-full bg-[#F7F9FC] border-none rounded-xl pl-10 pr-4 py-2.5 text-[14px] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        {/* Class Tabs */}
        <div className="flex px-4 gap-4 overflow-x-auto hide-scrollbar border-t border-gray-50 pt-2 relative">
          {classes.map((cls, idx) => (
            <button 
              key={cls.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "pb-2 text-[14px] font-bold whitespace-nowrap border-b-2 transition-colors px-1",
                activeTab === idx 
                  ? "border-[#3B5BDB] text-[#3B5BDB]" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
              )}
            >
              {cls.name}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 flex-1 pb-6 space-y-4">
        {/* Class Summary Card */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full pointer-events-none"></div>
           <div className="relative z-10 flex justify-between items-start">
             <div>
               <h2 className="text-lg font-bold text-gray-900 mb-1">{classes[activeTab].name}</h2>
               <div className="flex items-center gap-2 text-[12px] text-gray-500">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{classes[activeTab].year}</span>
                  <span>共 {classes[activeTab].studentCount} 名学生</span>
               </div>
             </div>
             <button className="p-2 -mr-2 -mt-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors active:bg-gray-100">
               <MoreVertical size={18} />
             </button>
           </div>
           
           <div className="grid grid-cols-2 gap-3 mt-5 relative z-10">
              <div className="bg-[#F7F9FC] rounded-xl p-3">
                 <div className="text-[12px] text-gray-500 mb-1 flex items-center gap-1">
                   <GraduationCap size={14} /> 班级均分
                 </div>
                 <div className="text-xl font-bold text-gray-900">{classes[activeTab].avgScore}</div>
              </div>
              <div className="bg-[#F7F9FC] rounded-xl p-3">
                 <div className="text-[12px] text-gray-500 mb-1 flex items-center gap-1">
                   <Users size={14} /> 活跃度
                 </div>
                 <div className="text-xl font-bold text-gray-900">{classes[activeTab].activeRate}%</div>
              </div>
           </div>
        </div>

        {/* Student List */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-50 bg-[#F7F9FC]/50">
             <span className="text-[14px] font-bold text-gray-900">学生成员 ({classes[activeTab].studentCount})</span>
             <button className="text-[13px] font-bold text-[#3B5BDB] flex items-center gap-1 hover:text-blue-800 transition-colors bg-blue-50 px-2.5 py-1.5 rounded-lg active:bg-blue-100">
               <UserPlus size={16} /> 添加学生
             </button>
          </div>
          <div className="divide-y divide-gray-50">
             {students.map((student) => (
                <div key={student.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group active:bg-gray-100">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center font-bold text-[15px] border border-blue-100 flex-shrink-0">
                         {student.name[0]}
                      </div>
                      <div>
                         <div className="text-[14px] font-bold text-gray-900 mb-0.5">{student.name}</div>
                         <div className="text-[11px] text-gray-500">学号: {student.no}</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="text-right">
                         <div className="text-[14px] font-bold text-gray-900">{student.avgScore} <span className="text-[10px] text-gray-500 font-normal">分</span></div>
                         <div className="text-[11px] text-gray-500">{student.totalTasks}篇作文</div>
                      </div>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[#3B5BDB] transition-colors" />
                   </div>
                </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
