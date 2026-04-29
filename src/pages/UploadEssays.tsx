import { ChevronLeft, Camera, Image as ImageIcon, FileText, Info, Trash2, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function UploadEssays() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">上传作文</span>
          <div className="w-10"></div>
        </div>

        {/* Stepper */}
        <div className="px-5 py-4 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center text-gray-400 gap-1.5">
            <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">1</span>
            创建任务
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-2"></div>
          <div className="flex items-center text-blue-600 gap-1.5">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">2</span>
            <span className="text-[13px] font-bold">上传作文</span>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-2"></div>
          <div className="flex items-center text-gray-400 gap-1.5">
            <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">3</span>
            AI批改
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 flex-1 pb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-[15px] font-bold text-gray-900 mb-4">选择上传方式</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-[#f8f9fc] hover:bg-blue-50/50 cursor-pointer border border-gray-100 p-4 rounded-xl flex justify-between items-center transition-colors">
               <div className="flex items-center gap-3">
                 <div className="bg-blue-100 text-blue-500 p-2.5 rounded-xl">
                   <Camera size={22} className="fill-current text-blue-600 border border-transparent" />
                 </div>
                 <div>
                   <div className="text-[14px] font-bold text-gray-900">拍照上传</div>
                   <div className="text-[11px] text-gray-500 mt-0.5">拍摄纸质作文</div>
                 </div>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>

             <div className="bg-[#f8f9fc] hover:bg-teal-50/50 cursor-pointer border border-gray-100 p-4 rounded-xl flex justify-between items-center transition-colors">
               <div className="flex items-center gap-3">
                 <div className="bg-teal-100 text-teal-500 p-2.5 rounded-xl">
                   <ImageIcon size={22} className="fill-transparent stroke-[1.5]" />
                 </div>
                 <div>
                   <div className="text-[14px] font-bold text-gray-900">多图上传</div>
                   <div className="text-[11px] text-gray-500 mt-0.5">批量选择多张图片</div>
                 </div>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>

            <div className="bg-[#f8f9fc] hover:bg-purple-50/50 cursor-pointer border border-gray-100 p-4 rounded-xl flex justify-between items-center transition-colors">
               <div className="flex items-center gap-3">
                 <div className="bg-purple-100 text-purple-500 p-2.5 rounded-xl flex items-center justify-center">
                   <span className="font-bold text-purple-600 text-xs tracking-tighter">PDF</span>
                 </div>
                 <div>
                   <div className="text-[14px] font-bold text-gray-900">PDF上传</div>
                   <div className="text-[11px] text-gray-500 mt-0.5">上传PDF文件</div>
                 </div>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>

            <div className="bg-[#f8f9fc] hover:bg-orange-50/50 cursor-pointer border border-gray-100 p-4 rounded-xl flex justify-between items-center transition-colors">
               <div className="flex items-center gap-3">
                 <div className="bg-orange-100 text-orange-500 p-2.5 rounded-xl flex items-center justify-center">
                   <div className="w-5 h-5 bg-orange-500 rounded text-white flex items-center justify-center text-[10px] font-bold">ZIP</div>
                 </div>
                 <div>
                   <div className="text-[14px] font-bold text-gray-900">ZIP压缩包</div>
                   <div className="text-[11px] text-gray-500 mt-0.5">上传ZIP压缩文件</div>
                 </div>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 mt-2">
            <h3 className="text-[15px] font-bold text-gray-900">已上传文件 <span className="text-gray-400 font-normal text-xs ml-1">(共4个)</span></h3>
            <button className="text-gray-500 text-xs flex items-center gap-1 hover:text-red-500 transition-colors">全部清空 <Trash2 size={12}/></button>
          </div>

          <div className="space-y-3">
            {[
              { name: "学生A_作文1.jpg", size: "2.4 MB", date: "2024/05/18 09:21", status: "已完成", icon: "img" },
              { name: "学生B_作文1.jpg", size: "2.1 MB", date: "2024/05/18 09:22", status: "已完成", icon: "img" },
              { name: "高二作文批量.pdf", size: "8.7 MB", date: "2024/05/18 09:23", status: "待解析", icon: "pdf" },
              { name: "第8周作文.zip", size: "32.6 MB", date: "2024/05/18 09:24", status: "待解析", icon: "zip" },
            ].map((file, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                    {file.icon === 'img' ? (
                       <img src={`https://picsum.photos/seed/${i}/100/100`} className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="preview" />
                    ) : file.icon === 'pdf' ? (
                       <div className="bg-red-500 w-8 h-10 rounded text-white flex flex-col items-center justify-center">
                         <div className="w-4 h-1 bg-white/50 rounded mb-1"></div>
                         <span className="text-[9px] font-bold border-t border-white/20 pt-0.5 mt-1 w-full text-center">PDF</span>
                       </div>
                    ) : (
                       <div className="bg-blue-600 w-8 h-10 rounded text-white flex items-center justify-center relative">
                         <span className="text-[10px] font-bold z-10 mt-2">ZIP</span>
                         <div className="absolute top-0 w-3 h-5 border-x border-b border-blue-400 bg-blue-500 flex flex-col items-center pt-0.5 space-y-0.5">
                           <div className="w-1 h-0.5 bg-blue-300"></div><div className="w-1 h-0.5 bg-blue-300"></div>
                         </div>
                       </div>
                    )}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-gray-900 mb-0.5 truncate max-w-[150px]">{file.name}</div>
                    <div className="text-[11px] text-gray-400">{file.size} | {file.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={cn("text-[11px] font-medium px-2 py-0.5 rounded", file.status === '已完成' ? 'text-teal-600 bg-teal-50' : 'text-orange-500 bg-orange-50')}>
                    {file.status}
                  </span>
                  <ChevronRight size={14} className="text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-blue-50 p-3 rounded-xl flex items-start gap-2 border border-blue-100/50">
             <div className="text-blue-500 mt-0.5"><Info size={16} /></div>
             <p className="text-blue-700 text-xs leading-relaxed font-medium">
               本系统通过多模态大模型直接识别作文内容，无需单独OCR
             </p>
          </div>

        </div>
      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe grid grid-cols-2 gap-3 z-20">
        <button 
          className="w-full py-3.5 bg-white border border-blue-600 text-blue-600 rounded-xl text-[15px] font-bold active:bg-blue-50 transition-colors"
        >
          继续添加
        </button>
        <button 
          onClick={() => navigate('/tasks/1')}
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          开始AI评分
        </button>
      </div>

    </div>
  );
}
