import React, { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import axios from 'axios';

function OtpModal({onClose, onSubmit, userData, apiEndpoint }) {
  const [otp, setOtp] = useState(['', '', '', '' ,'','']);
  const [focusIndex, setFocusIndex] = useState(0);
  const otpInputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    
    if (value !== '' && index < otp.length - 1) {
      setFocusIndex(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input box on backspace
    if (e.key === 'Backspace' && index > 0) {
      setFocusIndex(index - 1);
    }
  };

  useEffect(() => {
    // Set focus to the current input box
    if (otpInputRefs[focusIndex] && otpInputRefs[focusIndex].current) {
      otpInputRefs[focusIndex].current.focus();
    }
  }, [focusIndex]);

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');
    console.log(enteredOtp)
    // Combine user data with entered OTP
    const dataToSend = { ...userData, otp: enteredOtp };

    try {
      // Make the API call using axios
      const response = await axios.post(apiEndpoint, dataToSend);

      // Handle the API response as needed
      console.log('API Response:', response.data);

      // Close the modal
      onClose();
    } catch (error) {
      // Handle API error
      console.error('API Error:', error.message);
      // Display an error message or take appropriate action
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>OTP Modal</h2>
      <div>
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={otpInputRefs[index]}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  );
}

export default OtpModal;
