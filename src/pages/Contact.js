import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Contact.css";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="contact-page">
      <Header />
      <section className={`contact ${animate ? "animate-scale" : ""}`}>
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Leave us a message</p>
        </div>
        <form className="contact-form">
          <div className="name-fields">
            <div className="form-group">
              <fieldset>
                <legend>First Name</legend>
                <input type="text" placeholder="First Name" required />
              </fieldset>
            </div>
            <div className="form-group">
              <fieldset>
                <legend>Last Name</legend>
                <input type="text" placeholder="Last Name" required />
              </fieldset>
            </div>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
