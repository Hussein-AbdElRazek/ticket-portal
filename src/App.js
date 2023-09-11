import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/user/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/user/Home/Home";

function App()
{
  return (
    <Routes >
      <Route path='user/signup' element={<SignUp />} />
      <Route path='user/login' element={<Login />} />
      <Route path='user/*' element={<Home />} />

    </Routes>
  );
}

export default App;
