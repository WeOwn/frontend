import React, { useState, useEffect } from 'react';

const FeedbackFormModal = ({ onClose, setThankyou, initialEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: initialEmail || '',
    phone: '',
    company: '',
    primaryInterest: '',
    propertyType: '',
    location: '',
    features: '',
    currentPlatform: '',
    challenges: '',
    techImportance: '5'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
      alignItems: 'flex-start',
      overflowY: 'auto',
      padding: '20px',
      zIndex: 1000
    },
    container: {
      backgroundColor: 'white',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '600px',
      position: 'relative',
      marginTop: '20px',
      marginBottom: '20px',
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
      transition: 'border-color 0.2s'
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.2s',
      backgroundColor: 'white'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      minHeight: '100px',
      resize: 'vertical',
      outline: 'none',
      transition: 'border-color 0.2s'
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
      transition: 'background-color 0.2s',
      opacity: (props) => props.isSubmitting ? 0.7 : 1,
      pointerEvents: (props) => props.isSubmitting ? 'none' : 'auto'
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
    },
    rangeContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    range: {
      flex: 1,
      height: '2px',
      WebkitAppearance: 'none',
      appearance: 'none',
      backgroundColor: '#e5e7eb',
      borderRadius: '9999px',
      outline: 'none'
    },
    error: {
      color: '#dc2626',
      fontSize: '14px',
      marginTop: '8px'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://weown-waitlist-akfnbpehb8a9bpc8.centralindia-01.azurewebsites.net/contact/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          companyName: formData.company,
          primaryInterest: formData.primaryInterest,
          propertyType: formData.propertyType,
          locationPreference: formData.location,
          desiredPlatformFeatures: formData.features,
          currentPlatform: formData.currentPlatform,
          currentChallenges: formData.challenges,
          immersiveTechImportance: parseInt(formData.techImportance)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setThankyou(true);
      onClose();
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      email: initialEmail
    }));
  }, [initialEmail]);

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
          <h2 style={modalStyles.title}>Join Our Waitlist</h2>
        </div>

        <form onSubmit={handleSubmit} style={modalStyles.form}>
          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Phone Number *</label>
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
            <label style={modalStyles.label}>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name (if applicable)"
              value={formData.company}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Primary Interest *</label>
            <select
              name="primaryInterest"
              required
              value={formData.primaryInterest}
              onChange={handleChange}
              style={modalStyles.select}
            >
              <option value="">Select your primary interest</option>
              <option value="property-listing">Property Listing</option>
              <option value="investment">Investment</option>
              <option value="virtual-tours">Virtual Tours</option>
            </select>
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Property Type *</label>
            <select
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={handleChange}
              style={modalStyles.select}
            >
              <option value="">Select property type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Location Preference *</label>
            <input
              type="text"
              name="location"
              required
              placeholder="City, State, Country"
              value={formData.location}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Desired Platform Features</label>
            <textarea
              name="features"
              placeholder="What features would you like to see in an ideal real estate platform?"
              value={formData.features}
              onChange={handleChange}
              style={modalStyles.textarea}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Current Platform</label>
            <input
              type="text"
              name="currentPlatform"
              placeholder="Where do you currently list properties?"
              value={formData.currentPlatform}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>Current Challenges</label>
            <textarea
              name="challenges"
              placeholder="What challenges do you face in the current real estate marketplace?"
              value={formData.challenges}
              onChange={handleChange}
              style={modalStyles.textarea}
            />
          </div>

          <div style={modalStyles.inputGroup}>
            <label style={modalStyles.label}>
              Importance of Immersive Technology (VR/AR) *
            </label>
            <div style={modalStyles.rangeContainer}>
              <input
                type="range"
                name="techImportance"
                min="1"
                max="10"
                value={formData.techImportance}
                onChange={handleChange}
                style={modalStyles.range}
              />
              <span>{formData.techImportance}/10</span>
            </div>
          </div>

          {error && <div style={modalStyles.error}>{error}</div>}

          <button 
            type="submit" 
            style={{
              ...modalStyles.button,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackFormModal;
