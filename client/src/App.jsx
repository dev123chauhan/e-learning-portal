import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AuthForm from "./Component/Authorization/AuthForm";
import UserProfile from "./Component/Profile/UserProfile";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}
