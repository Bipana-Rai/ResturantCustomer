function Navbar() {
  return (
    <>
      <div className="fixed z-50  flex items-center justify-between pe-5 ps-20 h-13 bg-white w-[100vw]">
        <div className="border-1 rounded-md border-gray-300">
          <input
            type="text"
            className="px-3 py-1"
            placeholder="Search Your Menu here "
          />
        </div>
        <div className="flex">
          <div className="h-7 w-7 rounded-full">
            <img src="" alt="" />
          </div>
          <div>
            <p>Courtney henry</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
