
import { LiaChairSolid } from "react-icons/lia";
function TableCard() {
  return (
    <>
    <div className=' relative h-[200px] rounded-2xl w-[270px] bg-gray-200 px-15 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className="h-[90px] w-[180px] bg-amber-50 shadow-[0_3px_10px_rgb(0,0,0,0.4)] absolute top-13 left-12 rounded-2xl flex items-center justify-center">
            table 1
        </div>
        <div className="text-5xl flex pt-1">
        <LiaChairSolid />
         <LiaChairSolid />
          <LiaChairSolid />
           <LiaChairSolid />
        </div>
            <div className="text-5xl flex pt-23">
        <LiaChairSolid />
         <LiaChairSolid />
          <LiaChairSolid />
           <LiaChairSolid />
        </div>

    </div>
    </>
  )
}

export default TableCard