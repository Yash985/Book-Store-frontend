import React, { useState } from "react";
import { addBook } from "../service/api";
import toast from "react-hot-toast";

const book = {
  title: "",
  desc: "",
  img_url: "",
  type: "",
};
const AddBook = () => {
  const [input, setInput] = useState(book);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //call the api to add the book
    const res = await addBook(input);
    toast.success(res.message);
    //reset the input
    setInput(book);
  };

  return (
    <div className="bg-slate-400 h-[500px] w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg mt-4 flex flex-col items-center">
      <h2 className="text-center mt-10 text-3xl font-semibold mb-8">AddBook</h2>
      <form>
        <label className="ml-6 font-medium text-xl" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className="w-[90%] rounded-md h-8 ml-5 p-2 my-2 placeholder-slate-600"
          type="text"
          placeholder="Title of the book"
          value={input.title}
          onChange={(e) => handleChange(e)}
        />
        <label className="ml-6 font-medium text-xl" htmlFor="desc">
          Description
        </label>

        <input
          id="desc"
          className="w-[90%] rounded-md h-8 ml-5 p-2 my-2 placeholder-slate-600"
          type="text"
          placeholder="Discription of the book"
          value={input.desc}
          onChange={(e) => handleChange(e)}
        />
        <label className="ml-6 font-medium text-xl" htmlFor="img_url">
          Book Image URL
        </label>

        <input
          id="img_url"
          className="w-[90%] rounded-md h-8 ml-5 p-2 my-2 placeholder-slate-600"
          type="text"
          placeholder="Image URL of the book"
          value={input.img_url}
          onChange={(e) => handleChange(e)}
        />
        <label className="ml-6 font-medium text-xl" htmlFor="type">
          Subject
        </label>

        <select
          id="type"
          onChange={(e) => handleChange(e)}
          className="rounded-md ml-5 my-2 w-[90%] h-8 pl-2 text-slate-600"
          value={input.type}
        >
          <option value="">Select a subject</option>
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="englih">English</option>
          <option value="history">History</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-orange-500 rounded-md p-2 font-medium mt-4 w-[200px] ml-[120px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
