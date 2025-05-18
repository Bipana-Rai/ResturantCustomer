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

        <div className="grid grid-cols-4 w-[800px] h-[450px] ">
          {showLogin ? (
            <>
              <div className="col-span-2  bg-white relative   w-100 ">
                <Welcome />
              </div>
              <div className="col-span-2 relative flex items-center justify-center bg-white">
                <Login setShowLogin={setShowLogin} showLogin={showLogin} />
              </div>
            </>
          ) : (
            <>
              <div className="col-span-2  bg-white relative  w-100  py-3">
                <Register setShowLogin={setShowLogin} showLogin={showLogin} />
              </div>
              <div className="col-span-2 relative flex items-center justify-center bg-white">
                <Welcome />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Authentication;
