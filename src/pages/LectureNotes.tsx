import { ChevronLeft, FileText, MessageSquare, AlertCircle, BookOpen, Star, Edit3, Download, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LectureNotes() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">课堂讲义</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6 flex-1">
         {/* Title Card */}
         <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 flex gap-4">
             <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="fill-current text-blue-600/20" />
             </div>
             <div className="flex flex-col justify-center">
                <h2 className="text-[16px] font-bold text-gray-900 mb-1.5">高二日语作文讲评课讲义</h2>
                <div className="flex gap-2">
                   <span className="text-[10px] font-medium text-[#845EF7] bg-purple-50 px-2 py-0.5 rounded">AI已生成，可编辑</span>
                </div>
             </div>
         </div>

         {/* Note Sections */}
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
            
            {/* Opening */}
            <div className="p-5">
               <div className="flex items-center gap-2 mb-3">
                 <div className="bg-blue-100 text-blue-600 p-1 rounded">
                   <MessageSquare size={16} />
                 </div>
                 <h3 className="text-[15px] font-bold text-gray-900">开场点评</h3>
               </div>
               <div className="pl-8 text-[13px] text-gray-600 space-y-2 leading-relaxed">
                 <p>本次作文主题为“手机对中学生活的影响”。</p>
                 <p>整体来看，大部分同学能围绕主题展开，但在语言表达和逻辑衔接上仍有改进空间。</p>
               </div>
            </div>

            {/* High Frequency Errors Summary */}
            <div className="p-5">
               <div className="flex items-center gap-2 mb-3">
                 <div className="bg-blue-600 text-white p-1 rounded">
                   <AlertCircle size={16} />
                 </div>
                 <h3 className="text-[15px] font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">本次高频错误</h3>
               </div>
               <ul className="pl-8 text-[13px] text-gray-700 space-y-2 list-disc ml-4 font-medium">
                 <li>动词て形使用不当</li>
                 <li>助词误用（は/が、を/に）</li>
                 <li>表达逻辑不清，缺少连接词</li>
               </ul>
            </div>

            {/* Typical Error Explanations */}
            <div className="p-5">
               <div className="flex items-center gap-2 mb-4">
                 <div className="bg-blue-600 text-white p-1 rounded">
                   <BookOpen size={16} />
                 </div>
                 <h3 className="text-[15px] font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">典型错句讲解</h3>
               </div>
               
               <div className="pl-8 space-y-6">
                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
                   <div className="space-y-1.5">
                     <p className="text-[13px] text-gray-800"><span className="text-gray-500">学生原句：</span>私はスマホが好きですから、よく使っています。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-gray-500">问题：</span>原因表达不当，句式不自然。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-teal-600">修改建议：</span>私はスマホが好きなので、よく使っています。</p>
                   </div>
                 </div>

                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">2</div>
                   <div className="space-y-1.5">
                     <p className="text-[13px] text-gray-800"><span className="text-gray-500">学生原句：</span>スマホは便利ですけど、時間がなくなります。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-gray-500">问题：</span>表达不够具体，逻辑略显薄弱。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-teal-600">修改建议：</span>スマホは便利ですが、使いすぎると時間がなくなります。</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Good Expressions */}
             <div className="p-5">
               <div className="flex items-center gap-2 mb-4">
                 <div className="bg-purple-500 text-white p-1 rounded">
                   <Star size={16} />
                 </div>
                 <h3 className="text-[15px] font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">优秀表达赏析</h3>
               </div>
               
               <div className="pl-8 space-y-5">
                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">1</div>
                   <div className="space-y-1.5">
                     <p className="text-[13px] text-gray-800 font-medium">スマホは情報を簡単に調べることができて、とても便利です。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-[#F59F00]">亮点：</span>句型结构完整，表达自然流畅。</p>
                   </div>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">2</div>
                   <div className="space-y-1.5">
                     <p className="text-[13px] text-gray-800 font-medium">私はスマホを使うことで、友達と連絡を取りやすくなりました。</p>
                     <p className="text-[13px] text-gray-800"><span className="text-[#F59F00]">亮点：</span>逻辑清晰，使用了「〜ことで」句型。</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Exercises */}
            <div className="p-5">
               <div className="flex items-center gap-2 mb-4">
                 <div className="bg-teal-500 text-white p-1 rounded">
                   <Edit3 size={16} />
                 </div>
                 <h3 className="text-[15px] font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">课堂练习</h3>
               </div>
               
               <div className="pl-8 space-y-4">
                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-bold">1</div>
                   <p className="text-[13px] text-gray-800 font-medium leading-relaxed">用「〜ので」句型，写一句说明自己喜欢某个学科的理由。</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[30px] top-0 w-[20px] h-[20px] rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-bold">2</div>
                   <p className="text-[13px] text-gray-800 font-medium leading-relaxed">请写一个句子，说明手机在学习中的好处和坏处。</p>
                 </div>
               </div>
            </div>

         </div>
      </div>

       <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe grid grid-cols-[1fr_1fr_1.5fr] gap-2 z-20">
        <button className="py-3 bg-white border border-blue-600 text-blue-600 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-bold active:bg-blue-50 transition-colors">
          <Edit3 size={16} /> 编辑讲义
        </button>
        <button className="py-3 bg-white border border-teal-600 text-teal-600 flex items-center justify-center gap-1.5 rounded-xl text-[13px] font-bold active:bg-teal-50 transition-colors">
          <Download size={16} /><span className="text-[10px] bg-teal-600 text-white px-1 py-0.5 rounded ml-0.5 min-w-max">PDF</span> 导出PDF
        </button>
         <button className="py-3 bg-[#3B5BDB] hover:bg-[#2c47ab] flex items-center justify-center gap-1.5 text-white rounded-xl text-[13px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity">
          <PlayCircle size={18} /> 开始讲解
        </button>
      </div>
    </div>
  );
}
