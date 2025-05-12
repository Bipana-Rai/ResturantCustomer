import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import MyBooking from "./components/MyBooking";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-18">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/myBooking" element={<MyBooking/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
