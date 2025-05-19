
interface authenticationProps{
  showLogin:boolean
  setShowLogin:(showLogin:boolean)=>void
}
function Welcome({showLogin,setShowLogin}:authenticationProps) {
  return (
    <>
    <div className="relative h-full w-full ">
      <img src="/log.webp" alt="" className=" absolute h-full w-full" />
      
      <div className="h-full px-4 flex flex-col items-center justify-center absolute w-full  bg-[#0000006c] z-20 ">
        <p className="text-4xl font-extrabold font-serif text-white"> Welcome Back</p>
        <p className="text-white text-lg px-3 font-mono font-semibold text-center py-3">{`Please ${showLogin?"log in":"sign up"} using your personal information to stay connected with us...`}</p>
        <button  className="text-white  bg-[#b47f0c6b] font-semibold w-30 py-2 mt-3 rounded-md cursor-pointer" onClick={()=>setShowLogin(!showLogin)}>{showLogin?"SignUp":"LogIn"}</button>
      </div>
      </div>
    </>
  );
}

export default Welcome;
