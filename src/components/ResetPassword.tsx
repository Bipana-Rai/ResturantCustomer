import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
type ResetPasswordForm = {
  password: string;
};
function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ResetPasswordForm>();
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
        className="w-[450px] px-8 bg-white z-30 py-2 rounded-md"
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold text-gray-800">
              New Password
            </label>
            <input
              type="password"
              className="border-1 border-gray-500 py-1 px-3"
              {...register("password", { required: true })}
            />
            
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
