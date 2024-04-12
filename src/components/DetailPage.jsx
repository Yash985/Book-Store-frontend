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
        <div className="relative h-96 w-96 overflow-hidden shadow-2xl">
          <img
            className="h-96 w-96 object-fit rounded-lg "
            src={book?.img_url}
          />
          <div className="absolute h-20 w-full p-3 bottom-0 bg-[rgba(255,255,255,0.705)] transform translate-y-[20%] duration-500 hover:translate-y-0 ease-in">
            <h3 className="text-4xl">{book?.title}</h3>
          </div>
        </div>
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
