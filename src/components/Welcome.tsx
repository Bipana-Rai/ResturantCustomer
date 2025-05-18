

function Welcome() {
  return (
    <>
      <img src="/log.webp" alt="" className=" absolute h-full w-full " />
      <div className="h-full px-4 flex flex-col items-center justify-center absolute w-full bg-[#00000079] z-20 ">
        <p className="text-2xl font-bold text-white"> Welcome Back</p>
        <p className="text-white font-semibold text-center py-3">Please log in using your personal information to stay connected with us</p>
      </div>
    </>
  );
}

export default Welcome;
