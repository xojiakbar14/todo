import React from "react";
import { useContext } from "react";
import { Context } from "./context";
import Nav from "./Nav";

const Reg = () => {
  const { Reg } = useContext(Context);
  return (
    <div>
       <Nav/>
      <form onSubmit={Reg}>
        <input required type="email" />
        <br />
        <input required type="text" />
        <br />
        <input required type="password" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Reg;
