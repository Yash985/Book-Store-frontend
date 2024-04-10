import axios from "axios";
import toast from "react-hot-toast";

const URL = "http://localhost:3000";

export const addBook = async (data) => {
  try {
    const res = await axios.post(`${URL}/add`, data);
    return res.data;
  } catch (err) {
    console.log("Error while adding the book", err);
    toast.error(err.response.data.message);
  }
};

export const getBooks = async () => {
  try {
    const response = await axios.get(`${URL}/all`);
    return response.data;
  } catch (err) {
    console.log("Error while fetching the books", err);
  }
};

export const filterBooks = async (type) => {
  try {
    const response = await axios.get(`${URL}/filter/${type}`);
    return response.data;
  } catch (err) {
    console.log("Error while fetching the books", err);
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`${URL}/book/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error while fetching the book", err);
  }
}
