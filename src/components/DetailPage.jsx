import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
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
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          adipisci odit rem, odio assumenda nemo minus veniam pariatur, optio
          perspiciatis provident laboriosam porro! Dignissimos vel mollitia est
          culpa tempora quidem nesciunt sequi consequatur ut nihil nam cumque
          dolorum sunt velit accusamus magni consectetur itaque, distinctio
          aspernatur quae, ea labore? Voluptas aut aliquid aperiam nihil
          quibusdam eius alias ex? Temporibus ratione, quo voluptatem corrupti
          aliquam quibusdam ad odit minus totam nulla. Provident accusamus quas
          nam laudantium minima eius excepturi ea vero, tempora fugit quia
          aliquid at tenetur dolores ut voluptate accusantium delectus fuga
          magni aut? Dolorem, eaque distinctio? Ad, earum fugiat.
        </p>
        <p className="text-lg mt-4">Price:$200</p>

        <button className="bg-red-500 text-white px-4 mr-3 py-2 mt-4 rounded-lg hover:bg-red-400">Buy Now</button>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-400">Add To Cart</button>
      </div>
    </div>
  );
};

export default DetailPage;
