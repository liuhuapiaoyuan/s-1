import { ChevronLeft, FileText, Search, Star, Edit3, Settings2, FileOutput, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function OverallAnalysis() {
  const navigate = useNavigate();

  const freqErrors = [
    { name: "助词错误", count: 36, percent: 85.7, bg: "bg-red-400", w: "85%" },
    { name: "动词变形", count: 21, percent: 50.0, bg: "bg-orange-400", w: "50%" },
    { name: "连接词使用", count: 18, percent: 42.9, bg: "bg-yellow-400", w: "42%" },
    { name: "中式表达", count: 15, percent: 35.7, bg: "bg-blue-400", w: "35%" },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">整体分析</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6 flex-1">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-[url('https://api.iconify.design/noto:fuji-mountain.svg')] bg-no-repeat bg-right-top bg-contain pointer-events-none"></div>
          
          <div className="p-5 flex gap-4 border-b border-gray-50">
             <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="fill-current text-blue-600/20" />
             </div>
             <div>
                <h2 className="text-[16px] font-bold text-gray-900 mb-1 leading-snug">高二日语作文周测-第8周</h2>
                <div className="text-xs font-medium text-gray-500">班级整体分析报告</div>
             </div>
          </div>

          <div className="grid grid-cols-4 py-4 divide-x divide-gray-100">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#3B5BDB] text-xl font-bold mb-0.5">78.5</div>
              <div className="text-gray-500 text-[10px]">平均分</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#20C997] text-xl font-bold mb-0.5">94</div>
              <div className="text-gray-500 text-[10px]">最高分</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#F76707] text-xl font-bold mb-0.5">52</div>
              <div className="text-gray-500 text-[10px]">最低分</div>
            </div>
             <div className="flex flex-col items-center justify-center">
              <div className="text-[#845EF7] text-xl font-bold mb-0.5">42</div>
              <div className="text-gray-500 text-[10px]">总篇数</div>
            </div>
          </div>
        </div>

        {/* High Frequency Errors */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
           <div className="flex justify-between items-center mb-5">
             <h3 className="text-[15px] font-bold text-gray-900">高频错误</h3>
             <button className="text-[12px] text-gray-400 flex items-center">查看全部 <ChevronRight size={14}/></button>
           </div>
           
           <div className="space-y-4">
             {freqErrors.map((err, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className={cn("w-5 h-5 flex items-center justify-center text-[11px] font-bold text-white rounded shadow-sm", 
                     i === 0 ? "bg-red-500" : i === 1 ? "bg-orange-500" : i === 2 ? "bg-yellow-500" : "bg-blue-400"
                   )}>
                     {i+1}
                   </div>
                   <div className="text-[13px] font-medium text-gray-700 w-16 truncate">{err.name}</div>
                   <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className={cn("h-full rounded-full", err.bg)} style={{width: err.w}}></div>
                   </div>
                   <div className="w-20 text-right flex items-center justify-end gap-1">
                     <span className="text-[13px] text-gray-600 font-medium">{err.count} 篇</span>
                     <span className="text-[11px] text-gray-400">({err.percent}%)</span>
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* Typical Error Analysis */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-[15px] font-bold text-gray-900">典型问题分析</h3>
             <button className="text-[12px] text-gray-400 flex items-center">查看全部 <ChevronRight size={14}/></button>
           </div>

           <div className="space-y-3">
             <div className="border border-gray-100 rounded-xl p-4 bg-[#f8f9fc]">
               <div className="flex gap-3 items-start">
                  <div className="bg-blue-100 text-blue-500 p-2 rounded-lg mt-0.5">
                    <Search size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">助词「は」与「が」混用</h4>
                    <div className="text-[12px] text-gray-600 mb-1 leading-relaxed">
                      <span className="text-gray-400">问题表现：</span>在描述主题或对比关系时误用助词，导致句子逻辑不清。
                    </div>
                    <div className="text-[12px] text-gray-600 leading-relaxed">
                      <span className="text-teal-600 font-medium">教学建议：</span>结合对比练习，强化「は」与「が」的用法区分。
                    </div>
                  </div>
               </div>
             </div>

             <div className="border border-gray-100 rounded-xl p-4 bg-[#f8f9fc]">
               <div className="flex gap-3 items-start">
                  <div className="bg-blue-100 text-blue-500 p-2 rounded-lg mt-0.5">
                    <Search size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">连接词使用不当</h4>
                    <div className="text-[12px] text-gray-600 mb-1 leading-relaxed">
                      <span className="text-gray-400">问题表现：</span>使用「でも」代替「しかし」，语义转折关系不明确。
                    </div>
                    <div className="text-[12px] text-gray-600 leading-relaxed">
                      <span className="text-teal-600 font-medium">教学建议：</span>整理常用连接词用法，进行句子改写训练。
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* Excellent Expressions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-[15px] font-bold text-gray-900">优秀表达</h3>
             <button className="text-[12px] text-gray-400 flex items-center">查看全部 <ChevronRight size={14}/></button>
           </div>
           
           <div className="space-y-3">
             <div className="flex gap-3 items-start">
                <div className="bg-teal-50 text-teal-500 p-1.5 rounded-full mt-0.5"><Star size={14} className="fill-current text-teal-400/50"/></div>
                <div className="border-b border-gray-50 pb-3 flex-1">
                  <p className="text-[13px] font-medium text-gray-900 mb-1">私は旅行を通じて、異なる文化に触れることができた。</p>
                  <p className="text-[11px] text-gray-500"><span className="text-orange-500">亮点：</span>使用了「を通じて」自然表达手段，句子结构完整，表达流畅。</p>
                </div>
             </div>
             <div className="flex gap-3 items-start">
                <div className="bg-teal-50 text-teal-500 p-1.5 rounded-full mt-0.5"><Star size={14} className="fill-current text-teal-400/50"/></div>
                <div>
                  <p className="text-[13px] font-medium text-gray-900 mb-1">将来は、もっと多くの人とコミュニケーションが取りたい。</p>
                  <p className="text-[11px] text-gray-500"><span className="text-orange-500">亮点：</span>使用了「将来は」明确表达意愿，语言简洁自然。</p>
                </div>
             </div>
           </div>
        </div>

        {/* Lecture Suggestions */}
         <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-[15px] font-bold text-gray-900">课堂讲解建议</h3>
           </div>
           <div className="space-y-3">
             {[
               "重点讲解助词「は」「が」的区别与正确使用场景 (15分钟)",
               "动词变形专项巩固：ます形、て形、た形的转换练习 (15分钟)",
               "连接词用法归纳与对比练习 (10分钟)",
               "优秀范文赏析与写作思路拓展 (10分钟)"
             ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className={cn("w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 mt-0.5", 
                     i === 0 ? "bg-[#845EF7]" : i === 1 ? "bg-[#339AF0]" : i === 2 ? "bg-[#20C997]" : "bg-[#F59F00]"
                  )}>{i+1}</div>
                  <div className="text-[13px] text-gray-700 leading-relaxed font-medium">{text}</div>
                </div>
             ))}
           </div>
         </div>

      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe grid grid-cols-2 gap-3 z-20">
        <button 
          className="w-full py-3.5 bg-white border border-blue-600 text-blue-600 flex items-center justify-center gap-2 rounded-xl text-[15px] font-bold active:bg-blue-50 transition-colors"
        >
          <Settings2 size={18} /> 自定义分析
        </button>
        <button 
          onClick={() => navigate('/tasks/1/lecture')}
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] flex items-center justify-center gap-2 text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          <FileOutput size={18} /> 生成课堂讲义
        </button>
      </div>
    </div>
  );
}
