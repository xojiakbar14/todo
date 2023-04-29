import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const Reg = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/sign-up", {
        email: e.target[0].value,
        username: e.target[1].value,
        password: e.target[2].value,
      })
      .then(() => {
        alert("ok");
        navigate("/log");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const Log = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/sign-in", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("AuthTest", res.data.token);
          navigate("/store");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Context.Provider value={{ Reg, Log }}>{children}</Context.Provider>
    </>
  );
};

export { ContextProvider, Context };
