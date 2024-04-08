import React, { useEffect, useState } from "react";
import { filterBooks } from "../service/api";
import toast from "react-hot-toast";

const LeftSideBar = ({ setBook }) => {
  const [filter, setFilter] = useState("");

  const filterBook = async (e) => {
    e.preventDefault();
    if (filter === "") return toast.error("Please select a subject to filter");
    const res = await filterBooks(filter);
    if (res.length === 0) return toast.error("No books found");
    setBook(res);
  };

  return (
    <div className="bg-slate-300 text-black h-16 w-ful flex items-center p-4">
      <h2 className="text-2xl font-medium ml-8">Filters</h2>

      <form
        onSubmit={filterBook}
        className="flex w-full justify-evenly items-center"
      >
        <div>
          <input
            className=""
            type="radio"
            name="subject"
            id="maths"
            onChange={(e) => setFilter(e.target.id)}
          />
          <label className="text-md" for="maths">
            Maths
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name="subject"
            id="english"
            onChange={(e) => setFilter(e.target.id)}
          />
          <label className="text-md" for="english">
            English
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name="subject"
            id="science"
            onChange={(e) => setFilter(e.target.id)}
          />
          <label className="text-md" for="science">
            Science
          </label>
        </div>
        <div>
          <input
            className=""
            type="radio"
            name="subject"
            id="history"
            onChange={(e) => setFilter(e.target.id)}
          />
          <label className="text-md" for="history">
            History
          </label>
        </div>
        <div>
          <button
            className="bg-slate-400 p-2 rounded-xl text-black font-medium"
            type="submit"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftSideBar;
