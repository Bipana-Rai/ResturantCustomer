import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import ForgotPasswprd from "./components/ForgotPasswprd";
import MyBooking from "./components/MyBooking";
import ResetPassword from "./components/ResetPassword";
import MainLayout from "./outlet/MainLayout";
import Authentication from "./pages/Authentication";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/recoverypassword" element={<ForgotPasswprd />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route element={<MainLayout />}>
          {/*prevent user to access without login*/}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
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
