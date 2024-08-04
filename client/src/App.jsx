import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AuthForm from "./Component/Authorization/AuthForm";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </>
  );
}
