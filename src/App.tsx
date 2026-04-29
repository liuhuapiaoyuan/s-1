import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import BottomNav from "./components/BottomNav";

// Pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Templates from "./pages/Templates";
import Profile from "./pages/Profile";
import NewTask from "./pages/NewTask";
import UploadEssays from "./pages/UploadEssays";
import TaskDetails from "./pages/TaskDetails";
import SingleGrading from "./pages/SingleGrading";
import OverallAnalysis from "./pages/OverallAnalysis";
import LectureNotes from "./pages/LectureNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTemplate from "./pages/NewTemplate";
import ClassManagement from "./pages/ClassManagement";

function AppLayout() {
  return (
    <div className="w-full sm:max-w-md mx-auto bg-white min-h-[100dvh] sm:h-[100dvh] sm:shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] sm:border-x border-gray-100 overflow-hidden flex flex-col relative text-[15px]">
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}

function FullScreenLayout() {
  return (
    <div className="w-full sm:max-w-md mx-auto bg-white min-h-[100dvh] sm:h-[100dvh] sm:shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] sm:border-x border-gray-100 overflow-hidden flex flex-col relative text-[15px]">
       <div className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="sm:bg-gray-100 min-h-[100dvh] flex justify-center font-sans text-gray-900 selection:bg-blue-200">
      <Router>
        <Routes>
          {/* Main tabs with bottom nav */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* Full screen pages without bottom nav */}
          <Route element={<FullScreenLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks/new" element={<NewTask />} />
            <Route path="/tasks/:id/upload" element={<UploadEssays />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/tasks/:id/grade/:studentId" element={<SingleGrading />} />
            <Route path="/tasks/:id/analysis" element={<OverallAnalysis />} />
            <Route path="/tasks/:id/lecture" element={<LectureNotes />} />
            <Route path="/templates/new" element={<NewTemplate />} />
            <Route path="/classes" element={<ClassManagement />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
