import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyBooking from "./components/MyBooking";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import MainLayout from "./outlet/MainLayout";
import Authentication from "./pages/Authentication";


function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Authentication/>} />
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
