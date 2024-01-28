import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
const SESSION_TIMEOUT = 600000; // 10 minutes in milliseconds
export default function OtpVerification(){
    const location = useLocation();
    const voterId = location.state?.voterId || '';
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3001/otp-verification?voterId=${voterId}`)
          .then(response => {
            const { phoneNumber } = response.data;
            setPhoneNumber(phoneNumber);
          })
          .catch(error => {
            console.error('Error fetching phone number:', error);
          });
      }, []); 

      const obscurePhoneNumber = (number) => {
        if (number.length < 2) {
          return number; // handle edge case where the number is too short
        }
      
        const visibleDigits = number.slice(-2); // last two digits visible
        const obscuredDigits = '*'.repeat(Math.max(0, number.length - 2)); // replace the rest with '*'
        return `${obscuredDigits}${visibleDigits}`;
      };
    
      const handleOKClick = () => {
        navigate('/dashboard');
      };

      
    
      return (
        <div className='otp-body'>
          <p>An OTP has been sent to the number linked to your Aadhaar {obscurePhoneNumber(phoneNumber)}</p>
          <button onClick={handleOKClick}>OK</button>
        </div>
      );
    }


