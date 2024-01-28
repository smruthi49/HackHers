import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import india from "./images/india.png";
import india_vote from "./images/india-vote.jpg";
import vote_computer from "./images/vote-computer.jpg";
import Navbar from "./Navbar";
import About from "./About";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(true); // Set initial session state

  
  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div style={{ flexGrow: 10 }}>
            <img src={india }alt="india" height={250} width={1000} />
        </div>
      </div>
      <About />
    </>
  );
};

export default Dashboard;
