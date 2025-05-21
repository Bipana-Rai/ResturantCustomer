import { authorizeUser, loginData } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formdata } from "@/features/itemSlice";
import toast from "react-hot-toast";
import { AppAxiosError } from "@/features/itemSlice";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/utils/Loader";

interface authenticationProps {
  showLogin: boolean;
  setShowLogin: (showLogin: boolean) => void;
}

function Login({ setShowLogin, showLogin }: authenticationProps) {
  const { register, handleSubmit,reset } = useForm<formdata>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false)
  const { user } = useSelector((state: RootState) => state.item);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (user) {
      navigate("/menu", { replace: true });
    }
  }, [user, navigate]);
  const onSubmit = async (data: formdata) => {
    setLoading(true)
    try {
      await dispatch(loginData({ data })).unwrap();
      dispatch(authorizeUser())
      toast.success("LogIn successfully");
    } catch (error) {
      const err = error as AppAxiosError;
      const errorMessage = err?.message || "Login Failed";
      toast.error(errorMessage);
    }
    finally{
      setLoading(false)
    }
  };
  const handleSignup=()=>{
    setShowLogin(!showLogin)
    reset()
  }
  return (
    <>
    {loading && <Loader/>}
      <title>Login</title>
      <div className=" px-5 w-full   ">
        <p className="text-2xl font-bold text-center pb-4 ">LOGIN</p>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              className="block py-2.5   px-2 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              {...register("email")}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:-z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:z-10 bg-white peer-placeholder-shown:scale-100 px-3 mx-1 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative items-center pe-3 flex z-0 w-full mb-1 text-gray-900 bg-transparent  border-2 border-gray-300 ">
            <input
              type={showPassword ? "text" : "password"}
              className="block py-2.5 px-2 w-full text-sm appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer group "
              placeholder=" "
              required
              {...register("password")}
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

            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 mx-1 px-3 top-3 peer-placeholder-shown:-z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 bg-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <Link to="/recoverypassword" className=" text-cyan-600 ">
            Forgot password?
          </Link>
          <button className="bg-blue-500 w-full rounded-sm py-2 mt-4 text-gray-200">
            Login
          </button>
        </form>
        <p className="text-center pt-5">
          Don't have an account?{" "}
          <span
            className="text-cyan-600 cursor-pointer"
            onClick={handleSignup}
          >
            Signup
          </span>{" "}
        </p>
      </div>
    </>
  );
}

export default Login;
