import Login from "@/components/Login"

function Authentication() {
  return (
   <>
   <div className="h-[100vh] w-[100vw] flex justify-center items-center relative bg-amber-100">
    <img src="/bg.jpg" alt="" className="absolute h-full w-full" />
    <div className="w-[800px] z-20 h-[400px] bg-amber-200">
        <div className="grid grid-cols-4">
            <div className="col-span-2"></div>
             <div className="col-span-2 h-100 bg-white">
              <Login/>
             </div>
            
        </div>
    </div>

   </div>
   </>
  )
}

export default Authentication