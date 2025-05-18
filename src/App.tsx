import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyBooking from "./components/MyBooking";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import RegistrationForm from "./pages/RegistrationForm";
import MainLayout from "./outlet/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/myBooking" element={<MyBooking />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
