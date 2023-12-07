import React from "react";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
};

export default App;
