import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Order/Order";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
