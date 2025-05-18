import { loginData } from "@/features/itemSlice"
import { AppDispatch } from "@/store/store"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { formdata } from "@/features/itemSlice"

interface authenticationProps{
    showLogin:boolean,
    setShowLogin:(showLogin:boolean)=>void
}


function Login({setShowLogin,showLogin}:authenticationProps) {
  const {register,handleSubmit}=useForm<formdata>()
  const dispatch=useDispatch<AppDispatch>()
  const onSubmit=(data:formdata)=>{
const submitData=data
dispatch(loginData({data:submitData}))
console.log(submitData)
  }
  return (
   <>
   <div className=' px-5 w-full  '>
   <p className='text-2xl font-bold text-center pb-4 '>LOGIN</p>
   
<form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="email"   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  {...register("email")}/>
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:z-10 bg-white peer-placeholder-shown:scale-100 px-3 mx-1 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-1 group">
      <input type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("password")}/>
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 mx-1 px-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 bg-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <a href="" className=" text-cyan-600 ">Forgot password?</a>
  <button className="bg-blue-500 w-full rounded-sm py-2 mt-4 text-gray-200">Login</button>

</form>
<p className="text-center pt-5">Don't have an account? <span className="text-cyan-600 cursor-pointer" onClick={()=>setShowLogin(!showLogin)}>Signup</span> </p>

   </div>
   </>
  )
}

export default Login