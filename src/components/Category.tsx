interface category {
  category: string;
  image?: string;
}
interface categoryProps{
  data:category,
  setCategory:(category:string)=>void,
  categoryCount:number

}


function Category({ data,setCategory,categoryCount }: categoryProps) {
  




  return (
    <>
      <div className="h-14 flex w-[180px] cursor-pointer rounded-sm gap-1 items-center px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white " onClick={()=>setCategory(data.category)}>
        <div className="h-full flex  rounded-md items-center w-14 ">
          <img src={`http://localhost:5000/uploads/${data.image}`} alt="" />
        </div>
        <div className="text-sm">
          <p className="font-semibold">{data.category}</p>
          <p className="text-[12px] text-gray-400">{categoryCount} menu in stock</p>
        </div>
      </div>
    </>
  );
}

export default Category;
