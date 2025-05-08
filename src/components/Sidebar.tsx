
import sidebarContent from "../data/sidebarContent"
function Sidebar() {
  return (
    <>
    <div className="fixed h-[100vh] w-[70px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-20 flex flex-col items-center gap-10">
        {
            sidebarContent.map((e,i)=>(
                <div className="text-3xl text-gray-700 cursor-pointer flex justify-center h-10 items-center hover:text-cyan-700 w-full" title={e.title} key={i}>
                    {e.icon}
                </div>
            ))
        }

    </div>
    </>
  )
}

export default Sidebar