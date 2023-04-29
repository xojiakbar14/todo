import React from "react";
import Reg from "./Reg";
import { Routes, Route } from "react-router-dom";
import Log from "./Log";
import Store from "./Store";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/log" element={<Log />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
};

export default App;
