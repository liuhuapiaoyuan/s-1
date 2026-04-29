import { ChevronRight, FileEdit, FileClock, Bookmark, Users, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative pb-6 bg-[#F7F9FC] min-h-full">
      {/* Header Background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-50 to-transparent z-0">
        <div className="absolute top-0 right-0 w-48 h-48 opacity-30 bg-[url('https://api.iconify.design/noto:fuji-mountain.svg')] bg-no-repeat bg-right-top bg-contain"></div>
      </div>

      <div className="relative z-10 px-5 pt-12">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight">日语作文批改助手</h1>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">早上好，王老师</h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
            <p className="text-gray-600 text-sm font-medium">今天也高效完成作文讲评</p>
          </div>
        </div>

        {/* Start Grading Hero Button */}
        <div 
          onClick={() => navigate('/tasks/new')}
          className="bg-gradient-to-r hover:opacity-90 cursor-pointer transition-opacity from-[#3B5BDB] to-[#1E3A8A] rounded-2xl p-5 text-white shadow-lg shadow-blue-900/20 mb-6 flex justify-between items-center relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-full">
              <FileEdit size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">开始批改</h3>
              <p className="text-blue-100 text-xs">上传作文，一键AI批改与分析</p>
            </div>
          </div>
          <div className="bg-white text-blue-600 p-1.5 rounded-full z-10 relative">
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1 text-gray-600 text-xs font-medium">
              <div className="bg-blue-100 p-1 rounded text-blue-600"><FileText size={14} /></div>
              今日批改
            </div>
            <div className="text-2xl font-bold text-blue-700">18</div>
          </div>
          <div className="flex flex-col items-center border-l border-gray-100">
            <div className="flex items-center gap-1.5 mb-1 text-gray-600 text-xs font-medium">
              <div className="bg-teal-100 p-1 rounded text-teal-600"><FileClock size={14} /></div>
              待审核
            </div>
            <div className="text-2xl font-bold text-teal-600">6</div>
          </div>
          <div className="flex flex-col items-center border-l border-gray-100">
            <div className="flex items-center gap-1.5 mb-1 text-gray-600 text-xs font-medium">
              <div className="bg-purple-100 p-1 rounded text-purple-600"><Bookmarks size={14} /></div>
              课堂分析
            </div>
            <div className="text-2xl font-bold text-purple-600">3</div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mb-6">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3 ml-1">快捷入口</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: FileEdit, label: "新建任务", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: FileClock, label: "历史任务", color: "text-teal-500", bg: "bg-teal-50" },
              { icon: Bookmark, label: "评分模板", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Users, label: "学生管理", color: "text-orange-500", bg: "bg-orange-50" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", item.bg)}>
                   <item.icon size={24} className={item.color} />
                </div>
                <span className="text-xs text-gray-600 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3 px-1">
            <h3 className="text-[15px] font-bold text-gray-900">最近任务</h3>
            <Link to="/tasks" className="text-xs text-gray-500 flex items-center">全部任务 <ChevronRight size={12} /></Link>
          </div>
          <div className="space-y-3">
            <div 
              onClick={() => navigate('/tasks/1')}
              className="bg-white cursor-pointer hover:bg-gray-50 transition-colors p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center"
            >
              <div className="flex gap-3">
                <div className="bg-blue-50 p-2.5 rounded-xl h-fit text-blue-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1">高二日语作文周测-第8周</h4>
                  <div className="flex items-center text-xs text-gray-500 gap-2">
                    <span className="flex items-center gap-1"><Users size={12}/> 42人</span>
                    <span>|</span>
                    <span className="flex items-center gap-1"><FileClock size={12}/> 2024/05/18 08:30</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">待审核</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>

            <div 
              onClick={() => navigate('/tasks/2')}
              className="bg-white cursor-pointer hover:bg-gray-50 transition-colors p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center"
            >
              <div className="flex gap-3">
                <div className="bg-teal-50 p-2.5 rounded-xl h-fit text-teal-500">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1">N3写作练习-春游主题</h4>
                  <div className="flex items-center text-xs text-gray-500 gap-2">
                    <span className="flex items-center gap-1"><Users size={12}/> 36人</span>
                    <span>|</span>
                    <span className="flex items-center gap-1"><FileClock size={12}/> 2024/05/16 14:20</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">已完成</span>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Common Templates */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <h3 className="text-[15px] font-bold text-gray-900">常用模板</h3>
            <Link to="/templates" className="text-xs text-gray-500 flex items-center">更多模板 <ChevronRight size={12} /></Link>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
            {['N5', 'N4', 'N3', '高考日语', '自定义'].map((level, i) => (
              <div key={i} className={cn("whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border",
                i === 3 
                ? 'border-blue-200 bg-blue-50 text-blue-600'
                : i === 2 
                  ? 'border-purple-200 bg-purple-50 text-purple-600'
                  : i === 1
                    ? 'border-teal-200 bg-teal-50 text-teal-600'
                    : 'border-gray-200 bg-white text-gray-600'
              )}>
                {level}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Bookmarks({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8l6-3 6 3Z" />
    </svg>
  );
}
