import { useForm } from "react-hook-form";
import { signupData, signupDetail } from "@/features/itemSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import toast from "react-hot-toast";
import { AppAxiosError } from "@/features/itemSlice";

interface authenticationProps {
  showLogin: boolean;
  setShowLogin: (showLogin: boolean) => void;
}

function Register({ setShowLogin, showLogin }: authenticationProps) {
  const { register, handleSubmit,formState:{errors},reset } = useForm<signupData>();
  const dispatch = useDispatch<AppDispatch>();
 
  const onSubmit = async (data: signupData) => {
    const formWithRole={...data,role:"customer"}
    console.log("data",formWithRole)
    try {
      await dispatch(signupDetail({ data:formWithRole })).unwrap();
      toast.success("Registered Successfully");
      setShowLogin(true);
    } catch (error) {
      const err = error as AppAxiosError;
      const errorMessage = err?.message || "Registration Failed";
      toast.error(errorMessage);
    }
  };
     const handleLogin=()=>{
    setShowLogin(!showLogin)
    reset()
  }
  return (
    <>
      <div className="px-4 w-100">
        <p className="text-2xl font-bold text-center py-2">SIGNUP</p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-2 w-full text-sm text-gray-900  bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              {...register("fullName")}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  peer-placeholder-shown:-z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:z-10 bg-white px-3 mx-2 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("email")}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:-z-10
      peer-focus:z-10 bg-white px-3 mx-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              {...register("password")}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  peer-placeholder-shown:-z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:z-10 bg-white px-3 mx-2 
      peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <div className="">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                placeholder=" "
                required
                {...register("phone", {
                  validate: (value) => {
                    if (value.length < 10) {
                      return "Invalid Phone number";
                    }
                    if (value.length > 10) {
                      return "Phone number must be exactly 10 digits.";
                    }

                    if (!/^98|97/.test(value)) {
                      return "Phone number must start with 98 or 97.";
                    }
                    return true;
                  },
                })}
              />
               {errors.phone && (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">Error:</span> {errors.phone.message}
    </p>
  )}
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  peer-placeholder-shown:-z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 
        peer-focus:z-10 bg-white px-3 mx-2 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-gray-100 py-2 rounded-sm  "
          >
            Sign Up
          </button>
          <p className="text-center pt-5 py-3">
            Already have an account?{" "}
            <span
              className="text-cyan-600 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
