import React from "react";

const LeftSideBar = () => {
  return (
    <div className="bg-gray-400 text-white h-dvh min-w-[200px]">
      <div className=" text-center pt-5 ">
        <h2 className="text-3xl m-5">Filter</h2>
        <div className="flex flex-col p-10 justify-around h-[500px]">
          <div>
            <input className="mr-2" type="checkbox" name="" id="maths" />
            <label for="maths">Maths</label>
          </div>
          <div>
            <input className="mr-2" type="checkbox" name="" id="english" />
            <label for="english">English</label>
          </div>
          <div>
            <input className="mr-2" type="checkbox" name="" id="science" />
            <label for="science">Science</label>
          </div>
          <div>
            <input className="mr-2" type="checkbox" name="" id="history" />
            <label for="history">History</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
