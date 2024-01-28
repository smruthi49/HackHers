import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import india from "./images/india.png";
import india_vote from "./images/india-vote.jpg";
import vote_computer from "./images/vote-computer.jpg";
import Navbar from "./Navbar";
import About from "./AdminAbout";
const AdminDashboard = () => {
  return (
    <>
    <Navbar />
      <div className="flex-container">
        <div style={{ flexGrow: 10 }}>
            <img src={india }alt="india" height={250} width={1000} />
        </div>
        {/* <div style={{ flexGrow: 2 }}>
        <img src={vote_computer}alt="india" height={200} width={250}/>
        </div> */}
      </div>
      <About />
      
    </>
  );
};

export default AdminDashboard;
