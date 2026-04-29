import { ChevronLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NewTask() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("N3");
  const [analysisTargets, setAnalysisTargets] = useState(["常见错误", "语法薄弱点", "优秀表达"]);

  const toggleAnalysis = (target: string) => {
    if (analysisTargets.includes(target)) {
      setAnalysisTargets(prev => prev.filter(t => t !== target));
    } else {
      setAnalysisTargets(prev => [...prev, target]);
    }
  };

  return (
    <div className="bg-white min-h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-50">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
          <ChevronLeft size={24} />
        </button>
        <span className="font-bold text-[17px] text-gray-900">新建任务</span>
        <div className="w-10"></div>
      </div>

      <div className="px-5 pt-4 space-y-6 pb-6 flex-1">
        {/* Task Name */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">任务名称</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue="高二日语作文周测-第8周"
              className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-400"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">14/50</span>
          </div>
        </div>

        {/* Essay Topic */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">作文题目</label>
          <div className="relative">
            <textarea 
              placeholder="请输入本次作文题目"
              className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-400 min-h-[100px] resize-none"
            />
            <span className="absolute right-4 bottom-3 text-xs text-gray-400">0/200</span>
          </div>
        </div>

        {/* Level */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">日语水平</label>
          <div className="flex gap-2.5 overflow-x-auto hide-scrollbar">
            {['N5', 'N4', 'N3', 'N2', '高考日语'].map(l => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={cn(
                  "px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-colors",
                  level === l 
                    ? "bg-blue-50 border-blue-200 text-blue-600" 
                    : "bg-white border-gray-200 text-gray-600"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Template */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">评分模板</label>
          <button className="w-full bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-3.5 flex justify-between items-center text-[15px] text-gray-900 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-500 text-white p-1 rounded">
                <BookmarkIcon size={16} />
              </div>
              <span>高考日语作文模板</span>
            </div>
            <ChevronLeft size={18} className="text-gray-400 rotate-180" />
          </button>
        </div>

        {/* Student Count */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">学生人数</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue="42"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[15px] text-gray-500">人</span>
          </div>
        </div>

        {/* Analysis Focus */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">
            分析方向 <span className="text-xs font-normal text-gray-400 ml-1">(多选)</span>
          </label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: "常见错误", outline: true },
              { id: "语法薄弱点", outline: true },
              { id: "优秀表达", outline: true },
              { id: "课堂讲义建议", outline: false }
            ].map(item => {
              const isSelected = analysisTargets.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleAnalysis(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm transition-all border flex items-center gap-1.5",
                    isSelected 
                      ? "border-blue-500 text-blue-600 bg-blue-50/50 font-medium" 
                      : "border-gray-200 text-gray-500 bg-white"
                  )}
                >
                  {item.id}
                  {isSelected && <div className="bg-blue-600 text-white rounded-full p-0.5"><Check size={8} strokeWidth={4} /></div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Requirements */}
        <div>
          <label className="block text-[15px] font-bold text-gray-900 mb-2">
            老师自定义要求 <span className="text-xs font-normal text-gray-400 ml-1">(选填)</span>
          </label>
          <div className="relative">
            <textarea 
              placeholder="例如：重点分析助词、动词变形和文章结构问题"
              className="w-full bg-[#f8f9fc] border border-gray-100 rounded-xl px-4 py-3.5 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-400 min-h-[90px] resize-none"
            />
            <span className="absolute right-4 bottom-3 text-xs text-gray-400">0/300</span>
          </div>
        </div>

      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe z-20">
        <button 
          onClick={() => navigate('/tasks/1/upload')}
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          下一步：上传作文
        </button>
      </div>
    </div>
  );
}

function BookmarkIcon({size}: {size: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}
