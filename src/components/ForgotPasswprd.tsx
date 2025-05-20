import { IoMdMail } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ForgotPasswprd() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-[100vw] relative flex items-center justify-center">
        <img
          src="/bg.jpg"
          alt=""
          className="absolute   h-full w-full  blur-md"
        />
        <motion.div
          className="w-[450px] px-8 bg-white z-30 py-2 rounded-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="  py-4 ">
            <p className="text-3xl font-semibold  text-center text-cyan-600 ">
              Forgot Password
            </p>
          </div>
          <p className="text-sm text-gray-500 pb-3">
            Please enter your e-mail address in the form.If we find an account
            then we will send an email with link to reset your password.
          </p>
          <form action="">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold text-gray-800">
                E-mail address
              </label>
              <input type="email" className="border-1 border-gray-500 py-1 px-3" />
            </div>
            <div className="flex justify-between py-5">
              <button
                className="flex gap-1 items-center text-cyan-600 font-semibold cursor-pointer text-lg"
                onClick={() => navigate("/")}
              >
                {" "}
                <IoMdArrowBack />
                Back
              </button>
              <button
                className="flex items-center bg-cyan-600 text-gray-100 w-30 gap-2 rounded-md justify-center py-2 cursor-pointer"
                type="submit"
                onClick={()=>navigate("/resetpassword")}
              >
                {" "}
                send link <IoMdMail />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default ForgotPasswprd;
