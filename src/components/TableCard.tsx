import { LiaChairSolid } from "react-icons/lia";
import { TableData } from "../features/itemSlice";
interface tableprops {
  data: TableData;
}
function TableCard({ data }: tableprops) {
  const rendeChairs = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <LiaChairSolid key={index} className="text-4xl" />
    ));
  };
  const topChairs =
    data.tableCapacity <= 4
      ? Math.ceil(data.tableCapacity / 2)
      : Math.min(4, data.tableCapacity);
  const bottomChairs =
    data.tableCapacity <= 4
      ? Math.floor(data.tableCapacity / 2)
      : Math.min(4, data.tableCapacity - topChairs);
  const sideChairs = data.tableCapacity > 8 ? data.tableCapacity - 8 : 0;
  const leftSideChairs = Math.ceil(sideChairs / 2);
  const rightSideChairs = Math.floor(sideChairs / 2);

  return (
    <>
      <div
        className={` relative h-[200px] rounded-2xl w-[270px]  px-15 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white`}
      >
        <div
          className={`h-[90px] w-[180px]  absolute top-13 left-12 rounded-2xl flex items-center  text-gray-100 justify-center ${
            data.tableStatus === "available"
              ? "bg-[#3b96ffcb] "
              : "bg-[#ff3f3f81]"
          }`}
        >
          table {data.tableNum}
        </div>
        {/* top chars */}
        <div
          className={` flex pt-4 ${
            data.tableStatus === "available" ? "text-cyan-800 " : "text-red-600"
          }`}
        >
          {rendeChairs(topChairs)}
        </div>
        {/* bottom chairs */}
        <div
          className={` flex pt-23 ${
            data.tableStatus === "available" ? "text-cyan-800 " : "text-red-600"
          }`}
        >
          {rendeChairs(bottomChairs)}
        </div>
        {/* left chair */}
        <div
          className={` absolute top-12 left-3  ${
            data.tableStatus === "available" ? "text-cyan-800 " : "text-red-600"
          }`}
        >
          {rendeChairs(leftSideChairs)}
        </div>
        {/* right chair */}
        <div
          className={` absolute top-12 right-3 ${
            data.tableStatus === "available" ? "text-cyan-800 " : "text-red-600"
          }`}
        >
          {rendeChairs(rightSideChairs)}
        </div>
      </div>
    </>
  );
}

export default TableCard;
