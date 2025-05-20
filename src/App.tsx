import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyBooking from "./components/MyBooking";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import MainLayout from "./outlet/MainLayout";
import Authentication from "./pages/Authentication";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import { authorizeUser } from "./features/itemSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPasswprd from "./components/ForgotPasswprd";
import ResetPassword from "./components/ResetPassword";


function App() {
  const dispatch=useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(authorizeUser())
  },[dispatch])
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication/>} />
        <Route path="/recoverypassword" element={<ForgotPasswprd/>}/>
        <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
        <Route element={<MainLayout />}>
        {/*prevent user to access without login*/}
        <Route element={<ProtectedRoute/>}> 
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/myBooking" element={<MyBooking />} />
          </Route>
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
