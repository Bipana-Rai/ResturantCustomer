import Login from "@/components/Login";
import Register from "@/components/Register";
import Welcome from "@/components/Welcome";
import { useState } from "react";

function Authentication() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center items-center relative ">
        <img
          src="/bg.jpg"
          alt=""
          className="absolute   h-full w-full  blur-md"
        />

        <div className="rounded-md overflow-hidden relative lg:w-[800px] lg:h-[450px] ">
          <div
            className={`w-[400px] z-30 h-full lg:absolute hidden lg:block transition-all duration-500 ease-in-out`}
            style={{
             
              transform: showLogin ? "translateX(0)" : "translateX(100%)",
              zIndex:40
             
            }}
          >
            <Welcome setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
          <div
            className={`lg:absolute lg:h-full lg:w-[400px] h-[450px] w-[350px]   flex items-center  justify-center transition-all duration-500 ease-in-out  bg-white`} 
            style={{
              
              transform: showLogin ? "translateX(100%)" : "translateX(0%) ",
              zIndex: showLogin ? 10 : 30,
            }}
          >
            <Register setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
          <div
           className={`lg:absolute lg:h-full lg:w-[400px] h-[450px] w-[350px] flex items-center justify-center transition-all duration-500 ease-in-out  bg-white`} 
            style={{
             
              transform: showLogin ? "translateX(100%)" : "translateX(0%)",
                zIndex: showLogin ? 30 : 10,
            }}
          >
            <Login setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
