import { ChevronLeft, FileText, CheckCircle2, MessageSquare, Star, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SingleGrading() {
  const navigate = useNavigate();
  const { studentId } = useParams();

  // Mock data for student
  const subScores = [
    { label: "内容完整度", icon: FileText, color: "bg-[#3B5BDB]", score: 17, max: 20 },
    { label: "语法准确性", icon: CheckCircle2, color: "bg-[#20C997]", score: 19, max: 25 },
    { label: "词汇使用", icon: MessageSquare, color: "bg-[#845EF7]", score: 16, max: 20 },
    { label: "表达自然度", icon: Star, color: "bg-[#F59F00]", score: 15, max: 20 },
    { label: "结构逻辑", icon: Star, color: "bg-[#339AF0]", score: 15, max: 15 },
  ];

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">单篇批改</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6 flex-1">
        {/* Student Profile Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 flex justify-between items-center relative overflow-hidden">
           <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border-2 border-white shadow-sm mt-1">
                  <UserIcon size={24} />
               </div>
               <div>
                  <h2 className="text-[18px] font-bold text-gray-900 mb-1.5">张同学</h2>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                     <FileText size={12} className="text-teal-600" />
                     <span>高二日语作文周测-第8周</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                     <Clock size={12} />
                     <span>提交时间：2024/05/18 08:30</span>
                  </div>
               </div>
           </div>
           
           <div className="flex flex-col items-end pt-2">
             <div className="flex items-baseline text-[#3B5BDB]">
                <span className="text-[38px] font-bold leading-none">82</span>
                <span className="text-sm text-gray-400 font-medium ml-1">/ 100</span>
             </div>
           </div>
        </div>

        {/* Sub Scores */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
           <h3 className="text-[15px] font-bold text-gray-900 mb-4">评分细项</h3>
           <div className="space-y-4">
             {subScores.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className={cn("text-white p-1.5 flex items-center justify-center rounded-full text-xs", item.color)}>
                      <item.icon size={14} />
                   </div>
                   <span className="text-[13px] font-medium text-gray-700 w-20">{item.label}</span>
                   
                   <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div 
                         className={cn("h-full rounded-full", item.color)} 
                         style={{width: `${(item.score / item.max) * 100}%`}}
                      ></div>
                   </div>
                   
                   <div className="w-12 text-right">
                     <span className={cn("text-[16px] font-bold", item.color.replace('bg-', 'text-'))}>{item.score}</span>
                     <span className="text-[11px] text-gray-400"> / {item.max}</span>
                   </div>
                </div>
             ))}
           </div>
        </div>

        {/* Comprehensive Review */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
           <h3 className="text-[15px] font-bold text-gray-900 mb-3">综合评语</h3>
           <p className="text-[14px] text-gray-600 leading-relaxed text-justify">
             本文主题明确，内容基本完整，能够围绕“我喜欢的季节”展开描述，使用了较为丰富的词汇和句型，表达较为自然。语法方面整体正确，但仍有一些助词和时态的使用问题。建议继续加强语法细节的积累，同时注意段落之间的逻辑衔接，使文章结构更加紧凑。
           </p>
        </div>

        {/* Typical Errors */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
           <h3 className="text-[15px] font-bold text-gray-900 mb-4">典型错误</h3>
           
           <div className="space-y-5">
             <div className="relative border-l-2 border-red-200 pl-4">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">1</div>
                <div className="space-y-2 pt-0.5">
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">错误句子：</span>
                     <span className="text-red-500 font-medium">友達<span className="border-b border-red-500">を</span>会いました</span>
                   </div>
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">修改建议：</span>
                     <span className="text-teal-600 font-medium">友達<span className="border-b border-teal-600">に</span>会いました</span>
                   </div>
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">错误原因：</span>
                     <span className="text-gray-600">「会う」是及物动词，后面需要接助词「に」，表示动作的对象。</span>
                   </div>
                </div>
             </div>

             <div className="relative border-l-2 border-red-200 pl-4">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">2</div>
                <div className="space-y-2 pt-0.5">
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">错误句子：</span>
                     <span className="text-red-500 font-medium">昨日私は映画を<span className="border-b border-red-500">見ます</span></span>
                   </div>
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">修改建议：</span>
                     <span className="text-teal-600 font-medium">昨日私は映画を<span className="border-b border-teal-600">見ました</span></span>
                   </div>
                   <div className="flex text-[13px]">
                     <span className="text-gray-500 w-16 flex-shrink-0">错误原因：</span>
                     <span className="text-gray-600">「昨日」表示过去时间，应使用过去式「ました」。</span>
                   </div>
                </div>
             </div>
           </div>
        </div>

      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe grid grid-cols-2 gap-3 z-20">
        <button 
          className="w-full py-3.5 bg-white border border-blue-600 text-blue-600 rounded-xl text-[15px] font-bold active:bg-blue-50 transition-colors"
        >
          老师修改
        </button>
         <button 
          onClick={() => navigate(-1)}
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          确认通过
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
