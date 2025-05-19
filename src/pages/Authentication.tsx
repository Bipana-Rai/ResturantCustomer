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

        <div className="rounded-md overflow-hidden lg:relative lg:w-[800px] lg:h-[450px]  h-[450px] w-[350px]  ">
          <div
            className={`w-[400px] z-30 h-full lg:absolute hidden lg:block transition-all duration-500 ease-in-out`}
            style={{
              transform: showLogin ? "translateX(0)" : "translateX(100%)",
              zIndex: 40,
            }}
          >
            <Welcome setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
          <div
            className={`absolute lg:h-full rounded-md lg:rounded-none lg:w-[400px] h-[450px] w-[350px] flex items-center  justify-center lg:transition-all lg:duration-500 ease-in-out  bg-white   ${
              showLogin ? "lg:translate-x-full z-10" : "lg:translate-x-0 z-30"
            }`}
          >
            <Register setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
          <div
            className={`absolute lg:h-full rounded-md lg:rounded-none lg:w-[400px] h-[450px] w-[350px] flex items-center  justify-center lg:transition-all lg:duration-500 ease-in-out  bg-white  ${
              showLogin ? "lg:translate-x-full z-30" : "lg:translate-x-0 z-10"
            }`}
          >
            <Login setShowLogin={setShowLogin} showLogin={showLogin} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
