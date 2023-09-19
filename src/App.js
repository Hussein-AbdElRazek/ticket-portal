import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/user/SignUp/SignUp";
import { useSelector } from "react-redux";

import Login from "./pages/Login/Login";
import UserHome from "./pages/user/Home/Home";
import AdminHome from "./pages/admin/Home/AdminHome";

function App()
{
  const role = useSelector(state => state.auth.role)
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

    </Routes>
  );
}

export default App;
