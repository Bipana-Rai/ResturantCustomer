import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-18">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
