import React, { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';

const launchDate = new Date('03/01/2024').getTime();

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now; 

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const App = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [formValues, setFormValues] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@clavimate.com?subject=Inquiry from ${formValues.name}&body=Company: ${formValues.companyName}%0D%0APhone: ${formValues.phone}%0D%0AEmail: ${formValues.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="App">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="social">
        <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
          <IconFacebook className="icon" />
        </a>
        <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
          <IconTwitter className="icon" />
        </a>
        <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer">
          <IconGithub className="icon" />
        </a>
      </div>
      <h1>Coming Soon</h1>
      <div className="countdown">
        <div className="countdown-item">
          {timeLeft.days} <span>days</span>
        </div>
        <div className="countdown-item">
          {timeLeft.hours} <span>hours</span>
        </div>
        <div className="countdown-item">
          {timeLeft.minutes} <span>minutes</span>
        </div>
        <div className="countdown-item">
          {timeLeft.seconds} <span>seconds</span>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1>Get ready for the change.</h1>
          <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            value={formValues.companyName}
            onChange={(e) => setFormValues({ ...formValues, companyName: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            required
          />
          <button type="submit" className="cta">
            Send us an email
          </button>
        </form>
      </div>
      <div className="footer">
  <span>
    <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i> Facebook
    </a>{' '}
    {' '}
   
  </span>
  <p>All trademarks are the property of their respective owners @ ManageMe</p>
</div>
    </div>
  );
};

export default App;
