import Login from "@/components/Login";
import Register from "@/components/Register";
import Welcome from "@/components/Welcome";
import { useState } from "react";

function Authentication() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center relative bg-amber-100 ">
        <img
          src="/bg.jpg"
          alt=""
          className="absolute   h-full w-full  blur-md"
        />

        <div className="grid grid-cols-4 relative w-[800px] h-[450px] ">
          <div
            className={`w-[400px] ${
              showLogin ? "left-0" : "right-0"
            } z-30 h-full absolute  transition-all duration-500 ease-in-out`}
            style={{
              left: 0,
              transform: showLogin ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <Welcome showLogin={showLogin} />
          </div>
          <div className="col-span-2  flex items-center justify-center w-full bg-white ">
            <Register setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
          <div className="col-span-2  flex items-center justify-center bg-white">
            <Login setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
