import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes >
      <Route path='user/signup' element={<SignUp />} />
      <Route path='user/login' element={<Login />} />

    </Routes>
  );
}

export default App;
