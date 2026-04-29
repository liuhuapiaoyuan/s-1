import { Mail, Lock, EyeOff, Eye, ArrowRight, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="min-h-full flex-1 bg-white relative overflow-hidden flex flex-col">
      {/* Decorative Background */}
      <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 px-8 pt-24 pb-12 flex flex-col justify-center">
         
         <div className="mb-12">
            <div className="w-16 h-16 bg-[#3B5BDB] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-6">
               <span className="text-2xl font-bold font-serif italic">Ai</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">欢迎登录</h1>
            <p className="text-[15px] text-gray-500">日语作文批改助手，高效完成教学闭环</p>
         </div>

         <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
               <label className="text-[13px] font-bold text-gray-700 ml-1">邮箱 / 账号</label>
               <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3B5BDB] transition-colors">
                     <User size={20} />
                  </div>
                  <input 
                     type="text" 
                     placeholder="请输入您的邮箱或账号"
                     className="w-full bg-[#F7F9FC] border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all placeholder-gray-400 font-medium"
                     defaultValue="wang@example.com"
                  />
               </div>
            </div>

            <div className="space-y-1">
               <label className="text-[13px] font-bold text-gray-700 ml-1">密码</label>
               <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3B5BDB] transition-colors">
                     <Lock size={20} />
                  </div>
                  <input 
                     type={showPassword ? "text" : "password"}
                     placeholder="请输入密码"
                     className="w-full bg-[#F7F9FC] border border-gray-100 rounded-2xl pl-12 pr-12 py-4 text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all placeholder-gray-400 font-medium"
                     defaultValue="password123"
                  />
                  <button 
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                     {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
               </div>
            </div>

            <div className="flex justify-end pt-1">
               <button type="button" className="text-[13px] font-bold text-[#3B5BDB] hover:text-blue-800 transition-colors">忘记密码？</button>
            </div>

            <div className="pt-6">
               <button 
                 type="submit" 
                 className="w-full bg-[#3B5BDB] hover:bg-[#2c47ab] text-white rounded-2xl py-4 flex justify-between items-center px-6 text-[16px] font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all group"
               >
                 <span>登 录</span>
                 <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                 </div>
               </button>
            </div>
         </form>

         <div className="mt-8 text-center text-[14px]">
            <span className="text-gray-500">还没有账号？ </span>
            <Link to="/register" className="font-bold text-[#3B5BDB] hover:underline">立即注册</Link>
         </div>

         {/* Third-party login mock */}
         <div className="mt-auto pt-12 pb-6">
            <div className="relative flex items-center justify-center mb-6">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
               </div>
               <div className="relative bg-white px-4 text-[12px] text-gray-400 font-medium">其他方式登录</div>
            </div>
            
            <div className="flex justify-center gap-4">
               {['WeChat', 'Apple', 'Google'].map((provider) => (
                 <button key={provider} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-bold text-gray-400">{provider[0]}</span>
                 </button>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
}
