import { useDispatch, useSelector } from "react-redux";
import TableCard from "../components/TableCard";
import React, { useEffect, useState } from "react";
import { getTable } from "../features/itemSlice";
import { AppDispatch, RootState } from "../store/store";
import { FaCircle } from "react-icons/fa6";
import tableStatusData from "../data/tableStatus";

function Booking() {
  const dispatch = useDispatch<AppDispatch>();
  const { tableDetail } = useSelector((state: RootState) => state.item);
  const [filterData, setFilterData] = useState(tableDetail);
  const handleStatus = (e: string) => {
    if (e === "Available") {
      const filterData = tableDetail?.filter(
        (data) => data.tableStatus.toLowerCase() === "available"
      );
      setFilterData(filterData);
    } else if (e === "Booked") {
      const filterData = tableDetail?.filter(
        (data) => data.tableStatus.toLowerCase() === "booked"
      );
      setFilterData(filterData);
    } else {
      setFilterData(tableDetail);
    }
  };
  useEffect(() => {
    setFilterData(tableDetail);
  }, [tableDetail]);
  useEffect(() => {
    dispatch(getTable());
  }, [dispatch]);

  return (
    <>
      <div className="pt-15 ps-10">
        <div className="py-4 flex gap-9">
          {tableStatusData.map((e, i) => (
            <div
              className="flex items-center gap-2 cursor-pointer"
              key={i}
              onClick={() => handleStatus(e.status)}
            >
              <div className={`text  ${e.color}`}>
                <FaCircle />
              </div>
              <p className="font-bold">{e.status}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5">
          {filterData?.map((data) => (
            <TableCard data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Booking;
