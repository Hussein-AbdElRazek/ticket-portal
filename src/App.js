import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/user/SignUp/SignUp";
import { useSelector } from "react-redux";

import Login from "./pages/Login/Login";
import UserHome from "./pages/user/Home/Home";
import AdminHome from "./pages/admin/Home/AdminHome";
import SuperAdminHome from "./pages/superAdmin/Home/SuperAdminHome";

function App()
{
  const role = useSelector(state => state.auth.role)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <Routes >
      <Route path='user/signup' element={<SignUp />} />
      <Route path='user/login' element={<Login />} />
      <Route path='admin/login' element={<Login />} />
      <Route path='superAdmin/login' element={<Login />} />
      {role === "user" && (
        <Route path='/*' element={<UserHome />} />
      )}
      {role === "admin" && (
        <Route path='/*' element={<AdminHome />} />
      )}
      {role === "superAdmin" && (
        <Route path='/*' element={<SuperAdminHome />} />
      )}
      {(isLoggedIn) ? <Route path="*" element={<Navigate to="/" replace={true} />} /> : <Route path="*" element={<Navigate to="/user/login" replace={true} />} />}
    </Routes>
  );
}

export default App;
