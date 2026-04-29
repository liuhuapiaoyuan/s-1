import { ChevronLeft, Plus, Trash2, GripVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Dimension {
  id: string;
  name: string;
  score: number;
  desc: string;
}

export default function NewTemplate() {
  const navigate = useNavigate();
  const [level, setLevel] = useState('N3');
  const [dimensions, setDimensions] = useState<Dimension[]>([
    { id: '1', name: '内容与结构', score: 30, desc: '文章主题明确，结构完整，逻辑连贯。' },
    { id: '2', name: '词汇与表达', score: 30, desc: '词汇使用准确丰富，能适当使用高级表达。' },
    { id: '3', name: '语法与句型', score: 20, desc: '语法结构正确，句式多样，较少出现基础错误。' },
    { id: '4', name: '标点与格式', score: 20, desc: '标点符号使用规范，书写格式符合日语要求。' }
  ]);

  const totalScore = dimensions.reduce((acc, curr) => acc + (Number(curr.score) || 0), 0);

  const addDimension = () => {
    setDimensions([
      ...dimensions,
      { id: Date.now().toString(), name: '自定义维度', score: 10, desc: '' }
    ]);
  };

  const removeDimension = (id: string) => {
    setDimensions(dimensions.filter(d => d.id !== id));
  };

  const updateDimension = (id: string, field: keyof Dimension, value: string | number) => {
    setDimensions(dimensions.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  return (
    <div className="bg-[#F7F9FC] min-h-full flex flex-col">
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-10 border-b border-gray-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-100">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-[17px] text-gray-900">创建评分模板</span>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-5 pt-5 pb-6 space-y-6 flex-1">
        
        {/* Template Name */}
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">模板名称</label>
          <input 
            type="text" 
            placeholder="例如：N3考级冲刺通用模板" 
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder-gray-400"
          />
        </div>

        {/* Level */}
        <div>
          <label className="block text-[14px] font-bold text-gray-900 mb-2">适用级别</label>
          <div className="flex flex-wrap gap-2">
            {['N1', 'N2', 'N3', 'N4', 'N5', '高考', '考研', '其他'].map(l => (
              <button 
                key={l}
                onClick={() => setLevel(l)}
                className={cn(
                  "px-4 py-2 rounded-lg text-[13px] font-medium transition-all border",
                  level === l 
                    ? "bg-blue-50 text-blue-600 border-blue-200" 
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Scoring Dimensions */}
        <div>
          <div className="flex items-end justify-between mb-3">
            <label className="block text-[14px] font-bold text-gray-900">评分维度</label>
            <div className="text-[12px] font-medium text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-100 shadow-sm">
              满分合计: <span className={cn("font-bold text-[15px]", totalScore !== 100 ? "text-orange-500" : "text-teal-600")}>{totalScore}</span> 分
            </div>
          </div>
          
          <div className="space-y-3">
            {dimensions.map((dim, index) => (
              <div key={dim.id} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm group">
                <div className="flex gap-3 items-start relative">
                  <div className="pt-2 text-gray-300 cursor-grab">
                    <GripVertical size={18} />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={dim.name}
                        onChange={(e) => updateDimension(dim.id, 'name', e.target.value)}
                        placeholder="维度名称"
                        className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[14px] font-medium focus:bg-white focus:outline-none focus:border-blue-300"
                      />
                      <div className="w-24 relative">
                        <input 
                          type="number" 
                          value={dim.score}
                          onChange={(e) => updateDimension(dim.id, 'score', parseInt(e.target.value) || 0)}
                          className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-3 pr-8 py-2 text-[14px] font-bold text-center focus:bg-white focus:outline-none focus:border-blue-300"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]">分</span>
                      </div>
                    </div>
                    
                    <textarea 
                      value={dim.desc}
                      onChange={(e) => updateDimension(dim.id, 'desc', e.target.value)}
                      placeholder="评分细则描述（可选）"
                      rows={2}
                      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[13px] text-gray-600 focus:bg-white focus:outline-none focus:border-blue-300 resize-none min-h-[60px]"
                    />
                  </div>

                  <button 
                    onClick={() => removeDimension(dim.id)}
                    className="absolute -right-2 -top-2 w-7 h-7 bg-red-50 text-red-500 rounded-full flex items-center justify-center border border-red-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={addDimension}
            className="w-full mt-3 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            <Plus size={16} /> 添加维度
          </button>
        </div>

      </div>

      <div className="sticky bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 pb-safe z-20">
        <button 
          onClick={() => navigate(-1)}
          className="w-full py-3.5 bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-xl text-[15px] font-bold shadow-lg shadow-blue-500/20 active:opacity-90 transition-opacity"
        >
          保存模板
        </button>
      </div>
    </div>
  );
}
