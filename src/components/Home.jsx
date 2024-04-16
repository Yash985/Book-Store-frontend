import React, { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getBooks } from "../service/api";
import toast from "react-hot-toast";

const defaultBookData = [
  {
    _id: "1",
    title: "HC Verma",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img_url:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Science",
  },
];

const Home = () => {
  const [bookData, setBookData] = useState(defaultBookData);
  const navigate = useNavigate();

  //useEffect for fetching books from the database
  useEffect(() => {
    getUserauth();
    getBookData();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/login/success`);
      console.log("Home", res.data);
    } catch (err) {
      navigate("*");
    }
  };

  const getUserauth = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/authenticate`, {
        withCredentials: true,
      });
      console.log("Home", res.data.success);
    } catch (err) {
      if (err.response.data.success === false) {
        toast.error("Please login to continue");
        navigate("/login");
      } else {
        console.log(err);
      }
    }
  };

  // const logout = () => {
  //   window.open("http://localhost:3000/auth/logout", "_self");
  // }

  const getBookData = async () => {
    const response = await getBooks();
    if (response.length === 0) return setBookData(defaultBookData);
    setBookData(response);
  };

  const filterData = (data) => {
    setBookData(data);
  };

  return (
    <div className="">
      {/* Left bar */}
      <LeftSideBar setBook={filterData} />
      {/* Right bar */}
      <div className="p-10 grid grid-cols-4 gap-10">
        {bookData.map((book, index) => (
          <Cards
            key={index}
            image={book.img_url}
            desc={book.desc}
            title={book.title}
            id={book._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
