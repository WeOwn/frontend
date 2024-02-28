import React, { useState } from 'react';
import OtpModal from '../components/OtpModal';
import styles from './style.module.css';
import bannerImage from './home.png'; 

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert('Invalid Phone Number');
      return;
    }

    //api call yha ayegi otp wali
    setShowOtp(true);

    console.log('Form submitted:', {
      firstName,
      lastName,
      phone,
      termsAccepted,
    });
  };

  const closeOtpModal = () => {
    setShowOtp(false);
  };

  return (
    <div className={styles.maindiv}>
     <div className={styles.bannerimage}>
       
     <img  className={styles.homeimg} src={bannerImage} alt="Banner Image" />
     
      <div className={styles.blurdiv}>
       <h1>Welcome To Weown</h1><br>
      </br>
      <h1>We're glad you're here</h1>
        </div> 
     </div>
    
    <div className={`${styles['signup-page']} ${showOtp ? styles['blur-background'] : ''}`}>
      <header className={styles.header}>
        <div className={styles.logo}>Create your account</div>
        <div className={styles['welcome-title']}>Enter your credentials to create your account</div>
      </header>
      <main className={styles.main}>
       
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
          <div className={styles.namefield}>
        <div className={styles['name-inputs']}>
      <label htmlFor="firstName">First Name: </label>
    <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Your first name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
       
    />
  </div>
  <div className={styles['name-inputs']}>
    <label htmlFor="lastName">Last name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      placeholder="Your last name" 
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
  </div>

</div> 
          <div className={styles.inputPhone}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
           placeholder="Your phone number" 
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>

          <div className={styles['terms-checkbox']}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            <label htmlFor="terms">Accept terms and conditions</label>
          </div>
          <button type="submit" className={styles['register-button']}>
            Register
          </button>
        </form>
       
        <p className={styles['login-link']}>
          Already have an account? <a href="#">Login</a>
        </p>
        <div className={styles['social-login']}>
          <button className={styles['google-login']}>Continue with Google</button>
        </div>
      </main>
      
    </div>
    
    {showOtp && <OtpModal onClose={closeOtpModal} />}
    </div>
  );
}

export default Signup;
