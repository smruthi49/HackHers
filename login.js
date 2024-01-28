import React from "react";
import styled, { css } from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const MainContainer = styled.div`
  margin-top: 150px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  color: black;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //   max-width: 700px;
  padding: 40px;
`;

const sharedStyles = css`
  margin: 10px 0;
  padding: 5px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  width: 50%;
  height: 3rem;
  border: 1px solid black; /* Add border style */
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 60%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  font-size: 0.9rem;
  margin-top: 7px; /* Add margin at the top for spacing */
  padding: 0 20px;
  margin-bottom:10px;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  width: 30%;
  &:hover {
    background: linear-gradient(to right, #384278 0%, #1851b5 79%);
  }
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  text-align: left;
`;

function Login() {
  const navigate = useNavigate();
 
  const [voterId, setVoterId] = useState("");
  const [session, setSession] = useState(true);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
 

  const handleVoterIdChange = (e) => {
    setVoterId(e.target.value);
  };

  const handleAadhaarNumberChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Use OpenCage Geocoding API for reverse geocoding
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?key=d61afdcf1c624f74b498f0d0106b0166&q=${latitude}+${longitude}`
          );

          const country = response.data.results[0].components.country;

          // Check if the country is India
          if (country === "India") {
            toast.success("Current location: India", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            const response = await axios.post(
              "http://localhost:3001/submit-form",
              {
                voterId: voterId,
                aadhaarNumber: aadhaarNumber,
              }
            );

            // Process the response data as needed
            if (response.data.message === "found") {
              toast.success("Valid credentials!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                navigate("/otp-verification", { state: { voterId } });
              }, 3000);
            } else if (response.data.active === "no") {
              toast.error("Inactive voter ID!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.error("Invalid credentials!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else {
            toast.error("Access denied. You are not in India.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Error getting location.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <MainContainer className="loginbody">
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Enter voter ID:</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Voter ID"
          value={voterId}
          onChange={handleVoterIdChange}
        />
        <StyledLabel>Enter aadhar number:</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Aadhaar Number"
          value={aadhaarNumber}
          onChange={handleAadhaarNumberChange}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </MainContainer>
  );
}

export default Login;
