// ContactFormModal.jsx
import React, { useState } from 'react';

const ContactFormModal = ({ onClose, setThankyou }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    container: {
      backgroundColor: 'white',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '500px',
      position: 'relative',
      fontFamily: 'Urbanist, sans-serif'
    },
    header: {
      padding: '20px 24px',
      borderBottom: '1px solid #e5e7eb'
    },
    title: {
      color: '#7065f0',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    form: {
      padding: '24px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      minHeight: '120px',
      resize: 'vertical',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#7065f0',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#6b7280',
      cursor: 'pointer',
      padding: '4px'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThankyou(true);
    onClose();
  };

  return (
    <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={modalStyles.container}>
        <button 
          onClick={onClose}
          style={modalStyles.closeButton}
          aria-label="Close"
        >
          ×
        </button>

        <div style={modalStyles.header}>
          <h2 style={modalStyles.title}>Contact Us</h2>
        </div>

        <form onSubmit={handleSubmit} style={modalStyles.form}>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Message *
            </label>
            <textarea
              name="message"
              required
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              style={modalStyles.textarea}
            />
          </div>

          <button type="submit" style={modalStyles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
