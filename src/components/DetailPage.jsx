import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../service/api";

const DetailPage = () => {
  const [book, setBook] = useState({}); // [book, setBook
  const { id } = useParams();

  useEffect(() => {
    getBook(id);
  }, []);

  const getBook = async (id) => {
    // Add the code here to fetch the book details by id
    const res = await getBookById(id);
    setBook(res);
  };
  return (
    <div className="h-full w-full flex">
      <div className="h-[50%] w-[40%] mt-16 flex justify-center p-4">
        <img
          className="h-96 w-96 object-cover rounded-lg shadow-2xl"
          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="h-[50%] w-[60%]  mt-16 px-6">
        <h3 className="text-4xl mb-3">Description</h3>
        <h3 className="text-2xl">{book?.title}</h3>
        <p className="text-xl">{book?.desc}</p>
        <p className="text-lg mt-4">Price:$200</p>

        <button className="bg-red-500 text-white px-4 mr-3 py-2 mt-4 rounded-lg hover:bg-red-400">
          Buy Now
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-400">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
