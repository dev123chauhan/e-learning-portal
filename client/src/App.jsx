import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AuthForm from "./Component/Authorization/AuthForm";
import UserProfile from "./Component/Profile/UserProfile";
import Search from "./Component/Search/Search";
import Course from "./Component/Course/Course";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Search />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/career" element={<Course />} />
      </Routes>
    </>
  );
}
