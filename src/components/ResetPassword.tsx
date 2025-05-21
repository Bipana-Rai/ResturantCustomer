import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { MdError } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
type ResetPasswordForm = {
  password: string;
};
function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>();
  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/reset-password/${id}/${token}`,
        { password: data.password }
      );
      toast.success("Reset password successfully");
      navigate("/");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] relative flex items-center justify-center">
      <img src="/bg.jpg" alt="" className="fixed  h-full w-full  blur-md" />
      <motion.div
        className="md:w-[450px] w-[340px] px-8 bg-white z-30 py-2 rounded-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="  py-4 ">
          <p className="text-3xl font-semibold  text-center text-cyan-600 ">
            Reset Your Password
          </p>
        </div>
        <p className="text-sm text-gray-500 pb-3">
          Please enter your new password below. Make sure it’s strong and
          secure. Once you submit, your password will be updated immediately.
        </p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-semibold text-gray-800 pb-3">
              New Password
            </label>
            <div className={`border ${errors.password?"border-red-600":"border-gray-500"}   flex justify-between px-2 py-1 items-center`}>
              <input
                type={showPassword ? "text" : "password"}
                className=" outline-0 w-full"
                {...register("password", {
                  required: "Please enter new password.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 character",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character.",
                  },
                })}
              />
              {showPassword ? (
                <FaEye
                  className="cursor-pointer text-gray-600 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer text-gray-600 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-sm  text-red-600 font-semibold">
                <MdError className="inline mr-1" />

                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-between py-5">
            <button
              className="flex gap-1 items-center text-cyan-600 font-semibold cursor-pointer text-lg"
              onClick={() => navigate("/recoverypassword")}
            >
              {" "}
              <IoMdArrowBack />
              Back
            </button>
            <button
              className="flex items-center bg-cyan-600 text-gray-100 w-30 gap-2 rounded-md justify-center py-2 cursor-pointer"
              type="submit"
            >
              {" "}
              Update
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ResetPassword;
