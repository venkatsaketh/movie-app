import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
