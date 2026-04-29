import { ChevronRight, Bookmark, Plus, Star, Edit3, Book, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function Templates() {
  const navigate = useNavigate();
  const templates = [
    { name: "高考日语作文模板", default: true, tags: ["总分100", "语法25", "词汇20", "结构15"], desc: "适用于高考日语作文评分，覆盖语法、词汇、结构与表达四大维度。", icon: Bookmark, bg: "bg-indigo-500", text: "text-indigo-500", lightBg: "bg-indigo-50" },
    { name: "N3写作训练模板", default: false, tags: ["总分100", "语法30", "词汇20", "逻辑20"], desc: "适用于JLPT N3写作训练，注重语言准确性与逻辑连贯性。", icon: Edit3, bg: "bg-teal-500", text: "text-teal-500", lightBg: "bg-teal-50" },
    { name: "基础语法强化模板", default: false, tags: ["总分100", "语法35", "词汇20", "结构15"], desc: "适用于基础语法训练写作，侧重语法正确性与句式运用。", icon: Book, bg: "bg-blue-500", text: "text-blue-500", lightBg: "bg-blue-50" },
    { name: "自定义课堂分析模板", default: false, tags: ["总分100", "内容30", "表达25", "格式15"], desc: "适用于课堂作文分析，可根据教学目标灵活调整维度。", icon: Users, bg: "bg-orange-400", text: "text-orange-500", lightBg: "bg-orange-50" },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col relative w-full">
      <div className="bg-[#F7F9FC] sticky top-0 z-10 pt-12 pb-3">
        <div className="px-4 mb-4">
          <h1 className="font-bold text-2xl text-gray-900 tracking-tight">评分模板</h1>
        </div>
      </div>

      <div className="px-4 flex-1 pb-6">
        {/* Banner Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 relative overflow-hidden flex items-center justify-between">
           <div className="absolute right-0 bottom-0 top-0 w-32 bg-blue-50/50 -skew-x-12 translate-x-10 pointer-events-none"></div>
           <div>
              <div className="text-[16px] font-bold text-gray-900 mb-2 whitespace-nowrap">管理您的作文评分标准<br/>与分析模板</div>
              <div className="text-[11px] text-gray-500 max-w-[160px] leading-relaxed mb-3">创建、编辑和管理多维度评分模板，提升批改效率与一致性</div>
              <button className="bg-[#3B5BDB] px-4 py-1.5 text-white text-xs font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
                + 新建模板
              </button>
           </div>
           <div className="relative w-16 h-20 -mr-2 flex flex-col items-center justify-center pointer-events-none">
             <div className="absolute w-[44px] h-[52px] bg-blue-100 rounded-lg -rotate-6 translate-x-2"></div>
             <div className="absolute w-[48px] h-[56px] bg-blue-400 rounded-lg shadow-sm border border-blue-300 z-10 flex flex-col pt-3 px-2">
               <Star size={16} className="fill-white text-white self-center mb-1 drop-shadow-sm" />
               <div className="w-full h-1 bg-white/40 rounded mt-1"></div>
               <div className="w-2/3 h-1 bg-white/40 rounded mt-1"></div>
             </div>
           </div>
        </div>

        {/* Templates List */}
        <div className="space-y-4">
           {templates.map((tpl, i) => (
              <div key={i} className={cn(
                "bg-white rounded-2xl p-4 shadow-sm border relative overflow-hidden",
                tpl.default ? "border-blue-200" : "border-gray-100"
              )}>
                {tpl.default && (
                  <div className="absolute right-4 bottom-4 flex items-center gap-1 text-xs text-[#3B5BDB] font-medium">
                    <Star size={12} className="fill-current"/> 默认
                  </div>
                )}
                
                <div className="flexItems-start gap-3 mb-3 relative">
                   <div className="absolute top-0 right-0 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                   </div>
                   <div className="flex gap-3">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0", tpl.bg)}>
                         <tpl.icon size={22} className="fill-white/20" />
                      </div>
                      <div className="pr-10">
                         <div className="flex items-center gap-2 mb-2">
                           <h3 className="text-[15px] font-bold text-gray-900">{tpl.name}</h3>
                           {tpl.default && <span className="text-[10px] text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">默认模板</span>}
                         </div>
                         <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {tpl.tags.map((tag, j) => (
                               <span key={j} className={cn(
                                 "text-[10px] font-medium px-2 py-0.5 rounded",
                                 j === 0 ? "bg-purple-50 text-purple-600" : tpl.lightBg + " " + tpl.text
                               )}>
                                 {tag}
                               </span>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                <p className="text-[12px] text-gray-500 leading-relaxed pr-16">{tpl.desc}</p>
              </div>
           ))}
        </div>
      </div>

       <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md pt-2 pb-safe border-t border-gray-100/50 z-20">
        <button onClick={() => navigate('/templates/new')} className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] flex items-center justify-center gap-2 text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity">
          <Plus size={18} /> 创建新模板
        </button>
      </div>
    </div>
  );
}
