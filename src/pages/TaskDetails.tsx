import { ChevronLeft, FileText, BarChart2, PieChart, Download, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TaskDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("全部");

  const students = [
    { id: 1, name: "张同学", score: 82, status: "待审核" },
    { id: 2, name: "李同学", score: 76, status: "已完成" },
    { id: 3, name: "陈同学", score: 91, status: "已完成" },
    { id: 4, name: "王同学", score: 68, status: "待审核" },
    { id: 5, name: "林同学", score: 84, status: "已完成" },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate('/')} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">任务详情</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Banner Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-5">
             <div className="bg-blue-50 text-blue-500 p-2.5 rounded-xl">
                <FileText size={20} className="fill-current text-blue-600/20" />
             </div>
             <h2 className="text-[16px] font-bold text-gray-900 pr-16 truncate">高二日语作文周测-第8周</h2>
             <span className="absolute right-4 top-5 text-[11px] font-medium text-orange-500 bg-orange-50 px-2.5 py-1.5 rounded-md">待审核</span>
          </div>
          
          <div className="flex">
            <div className="flex-1 flex flex-col justify-center gap-1">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <div className="bg-blue-50 p-1.5 rounded-full"><FileText size={12} className="text-blue-500"/></div>
                作文数量
              </div>
              <div className="text-2xl font-bold text-gray-900 ml-1">42 <span className="text-xs text-gray-500 font-normal">篇</span></div>
            </div>
            <div className="w-px bg-gray-100 my-2 mx-4"></div>
            <div className="flex-1 flex flex-col justify-center gap-1 pl-2">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <div className="bg-teal-50 p-1.5 rounded-full"><BarChart2 size={12} className="text-teal-500"/></div>
                平均分
              </div>
              <div className="text-2xl font-bold text-gray-900 ml-1">78.5 <span className="text-xs text-gray-500 font-normal">分</span></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 bg-gray-100/50 p-1 rounded-full">
          {['全部', '待审核', '已完成'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-2 text-[14px] font-bold rounded-full transition-all",
                activeTab === tab ? "bg-[#3B5BDB] text-white shadow-md shadow-blue-500/20" : "text-gray-500 hover:text-gray-900"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {['按分数', '按学生', '按状态'].map(f => (
            <button key={f} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 flex items-center gap-1 shadow-sm">
              {f} <ChevronDown size={14} className="text-gray-400"/>
            </button>
          ))}
        </div>

        {/* Student List */}
        <div className="space-y-3 pb-6">
          {students.map((student) => (
            <div 
              key={student.id}
              onClick={() => navigate(`/tasks/1/grade/${student.id}`)}
              className="bg-white cursor-pointer hover:bg-gray-50 transition-colors rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border-2 border-white shadow-sm">
                  <UserIcon size={20} />
                </div>
                <span className="font-bold text-[15px] text-gray-900">{student.name}</span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="font-bold text-[18px] text-[#3B5BDB]">
                  {student.score}<span className="text-xs text-gray-400 ml-1 font-normal">分</span>
                </div>
                <div className="flex items-center gap-2 w-20 justify-end">
                  <span className={cn(
                    "text-[11px] font-medium px-2 py-0.5 rounded",
                    student.status === '待审核' ? "text-orange-500 bg-orange-50" : "text-teal-600 bg-teal-50"
                  )}>{student.status}</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe grid grid-cols-2 gap-3 z-20">
        <button 
          onClick={() => navigate('/tasks/1/analysis')}
          className="w-full py-3.5 bg-white border border-blue-600 text-blue-600 flex items-center justify-center gap-2 rounded-xl text-[15px] font-bold active:bg-blue-50 transition-colors"
        >
          <PieChart size={18} /> 生成整体分析
        </button>
        <button 
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] flex items-center justify-center gap-2 text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          <Download size={18} /> 导出全部报告
        </button>
      </div>
    </div>
  );
}

function UserIcon({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388 3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
    </svg>
  )
}
