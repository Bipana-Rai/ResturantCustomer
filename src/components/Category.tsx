interface category {
  category: string;
  image?: string;
}

function Category({ data }: { data: category }) {
  return (
    <>
      <div className="h-14 flex w-[180px] rounded-sm gap-1 items-center px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white ">
        <div className="h-full flex  rounded-md items-center w-14 ">
          <img src={`http://localhost:5000/uploads/${data.image}`} alt="" />
        </div>
        <div className="text-sm">
          <p className="font-semibold">{data.category}</p>
          <p className="text-[12px] text-gray-400">10 menu in stock</p>
        </div>
      </div>
    </>
  );
}

export default Category;
