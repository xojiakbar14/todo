import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Store = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("AuthTest")) {
      navigate(-1);
    }
  }, []);
  return (
    <div>
      <Nav />
      store
    </div>
  );
};

export default Store;
