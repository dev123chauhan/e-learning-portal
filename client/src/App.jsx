import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AuthForm from "./Component/Authorization/AuthForm";
import Search from "./Component/Search/Search";
import Course from "./Component/Course/Course"; 
import ProfileDashboard from "./Component/UserProfile/ProfileDashboard";
import CourseDetail from "./Component/CourseDetail/CourseDetail";
import Meeting from "./Component/Meeting/Meeting";
import EnrolledCourse from "./Component/EnrolledCourse/EnrolledCourse";
// import Dashboard from "./Component/Dashboard/Dashboard";
import StudentDashboard from "./Component/Dashboard/StudentDashboard";
import Layout from "./Component/Layout/Layout";
import Blog from "./Component/Blog/Blog";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Layout><Search /></Layout>} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/career" element={<Layout><Course /></Layout>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/about" element={<Layout><Meeting /></Layout>} />
        <Route path="/my-course" element={<EnrolledCourse />} />
        <Route path="/course/:id" element={<Layout><CourseDetail /></Layout>} />
      </Routes>
    </>
  );
}

