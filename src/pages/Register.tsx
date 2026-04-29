import { Mail, Lock, User, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration and navigate to login
    navigate('/login');
  };

  return (
    <div className="min-h-full flex-1 bg-white relative overflow-hidden flex flex-col">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-50/80 to-transparent z-0 pointer-events-none"></div>
      
      <div className="relative z-10 px-4 py-3 flex items-center pt-safe">
         <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft size={28} />
         </button>
      </div>

      <div className="relative z-10 flex-1 px-8 pt-6 pb-12 flex flex-col">
         
         <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">创建账号</h1>
            <p className="text-[15px] text-gray-500">注册即可获得智能批改体验</p>
         </div>

         <form onSubmit={handleRegister} className="space-y-5 flex-1">
            
            {/* Role Selection */}
            <div className="flex gap-4 mb-6">
               <button 
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={cn(
                     "flex-1 py-4 rounded-2xl border-2 flex items-center justify-center gap-2 text-[15px] font-bold transition-all",
                     role === 'teacher' ? "border-[#3B5BDB] bg-blue-50 text-[#3B5BDB]" : "border-gray-100 bg-[#F7F9FC] text-gray-500"
                  )}
               >
                  老师
               </button>
               <button 
                  type="button"
                  onClick={() => setRole('student')}
                  className={cn(
                     "flex-1 py-4 rounded-2xl border-2 flex items-center justify-center gap-2 text-[15px] font-bold transition-all",
                     role === 'student' ? "border-[#3B5BDB] bg-blue-50 text-[#3B5BDB]" : "border-gray-100 bg-[#F7F9FC] text-gray-500"
                  )}
               >
                  学生
               </button>
            </div>

            <div className="space-y-1">
               <label className="text-[13px] font-bold text-gray-700 ml-1">姓名</label>
               <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3B5BDB] transition-colors">
                     <User size={20} />
                  </div>
                  <input 
                     type="text" 
                     required
                     placeholder="真实姓名"
                     className="w-full bg-[#F7F9FC] border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all placeholder-gray-400 font-medium"
                  />
               </div>
            </div>

            <div className="space-y-1">
               <label className="text-[13px] font-bold text-gray-700 ml-1">账号 / 邮箱</label>
               <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3B5BDB] transition-colors">
                     <Mail size={20} />
                  </div>
                  <input 
                     type="text" 
                     required
                     placeholder="用于登录及接收通知"
                     className="w-full bg-[#F7F9FC] border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all placeholder-gray-400 font-medium"
                  />
               </div>
            </div>

            <div className="space-y-1">
               <label className="text-[13px] font-bold text-gray-700 ml-1">设置密码</label>
               <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3B5BDB] transition-colors">
                     <Lock size={20} />
                  </div>
                  <input 
                     type={showPassword ? "text" : "password"}
                     required
                     placeholder="至少8位，包含字母和数字"
                     className="w-full bg-[#F7F9FC] border border-gray-100 rounded-2xl pl-12 pr-12 py-4 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all placeholder-gray-400 font-medium"
                  />
               </div>
            </div>

            <div className="pt-2">
               <label className="flex items-start gap-2 max-w-full">
                  <div className="mt-0.5 text-[#3B5BDB]"><ShieldCheck size={16} /></div>
                  <span className="text-[12px] text-gray-500 leading-tight">
                     注册即代表您同意本平台的 <Link to="#" className="text-[#3B5BDB] font-bold">服务协议</Link> 和 <Link to="#" className="text-[#3B5BDB] font-bold">隐私政策</Link>
                  </span>
               </label>
            </div>

            <div className="pt-8">
               <button 
                 type="submit" 
                 className="w-full bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-2xl py-4 flex justify-between items-center px-6 text-[16px] font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all group"
               >
                 <span>立即注册</span>
                 <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                 </div>
               </button>
            </div>
         </form>

         <div className="mt-8 text-center text-[14px]">
            <span className="text-gray-500">已有账号？ </span>
            <Link to="/login" className="font-bold text-[#3B5BDB] hover:underline">去登录</Link>
         </div>

      </div>
    </div>
  );
}
