import { useDispatch, useSelector } from "react-redux"
import TableCard from "../components/TableCard"
import { useEffect } from "react"
import { getTable } from "../features/itemSlice"
import { AppDispatch, RootState } from "../store/store"


function Booking() {
    const dispatch=useDispatch<AppDispatch>()
    const {tableDetail}=useSelector((state:RootState)=>state.item)
    useEffect(()=>{
        dispatch(getTable())
    },[dispatch])
    
  return (
<>
<div className='pt-15 ps-10'>
    <div className="flex flex-wrap gap-5">
    {tableDetail?.map(()=>
     <TableCard/>
    )}
    </div>
   

</div>
</>
  )
}

export default Booking