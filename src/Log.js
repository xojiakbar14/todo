import React from "react";
import { useContext } from "react";
import { Context } from "./context";
import Nav from "./Nav";

const Log = () => {
  const { Log } = useContext(Context);
  return (
    <div>
       <Nav/>
      <form onSubmit={Log}>
        <input type="email" required />
        <br />
        <input type="password" required />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Log;
