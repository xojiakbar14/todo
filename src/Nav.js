import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      {!localStorage.getItem("AuthTest") ? (
        <>
          <Link to="/">Reg</Link>
          <Link to="/log">Log</Link>
        </>
      ) : null}

      <Link to="/store">Store</Link>
       {localStorage.getItem("AuthTest") ? (
        <>
             <button
        onClick={() => {
          localStorage.removeItem("AuthTest");
          window.location.reload();
        }}
      >
        log out
      </button>
        </>
       ) : null }  
      {!localStorage.getItem("AuthTest") ? <h1>lo'x</h1> : <h1>zo'r</h1>}
    </nav>
  );
};

export default Nav;
