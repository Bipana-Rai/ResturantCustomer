import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <div className="ml-18">
      <Routes>
        <Route path="/" element ={ <Menu />}/>

      </Routes>
      </div>
       
     
    </>
  );
}

export default App;
