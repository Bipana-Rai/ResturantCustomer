import { IoMdMail } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "@/utils/Loader";
import { AppAxiosError } from "@/features/itemSlice";

type ForgotPasswordForm = {
  email: string;
};
function ForgotPasswprd() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (data) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", data);
      toast.success("link send successfully to your eamil..");
    } catch (error) {
      const err = error as AppAxiosError;
      const message =
        err.response?.data?.message ||
        err.message ||
        "Failed to send reset link.";
      toast.error(message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}

      <div className="h-[100vh] w-[100vw] relative flex items-center justify-center">
        <img src="/bg.jpg" alt="" className="fixed  h-full w-full  blur-md" />
        <motion.div
          className="w-[450px] px-8 bg-white z-30 py-2 rounded-md"
          initial={{ opacity: 0, y: -20 }}
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
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-semibold text-gray-800 pb-3">
                E-mail address
              </label>
              <input
                type="email"
                className=" py-1 px-3
                    border border-gray-500"
                {...register("email", { required: "email is required" })}
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <p className="text-sm flex items-center gap-1 text-red-600 font-semibold">
                  <MdError />
                  {errors.email.message}
                </p>
              )}
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
                // onClick={()=>navigate("/resetpassword")}
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
