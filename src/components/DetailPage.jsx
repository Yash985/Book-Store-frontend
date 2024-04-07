import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    //This will let us know the id with which the user is trying to access the details page
    //Therefore we can fetch the details of the book with this id from the database
    let { id } = useParams();
  return <div>DetailPage:the params are{id}</div>;
};

export default DetailPage;
