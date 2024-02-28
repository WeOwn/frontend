import React from 'react';
import Modal from './Modal';

function OtpModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>OTP Modal</h2>
      {/* Your OTP input and submit button go here */}
    </Modal>
  );
}

export default OtpModal;
