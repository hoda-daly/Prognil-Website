import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Contact.css";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

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
    setSubmitStatus(null);

    try {
      const response = await fetch('http://prognil.runasp.net/api/Contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <section className={`contact ${animate ? "animate-scale" : ""}`}>
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Leave us a message</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="form-group">
              <fieldset>
                <legend>First Name</legend>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required 
                />
              </fieldset>
            </div>
            <div className="form-group">
              <fieldset>
                <legend>Last Name</legend>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  required 
                />
              </fieldset>
            </div>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="send-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="contact-page">
//       <Header />
//       <section className={`contact ${animate ? "animate-scale" : ""}`}>
//         <div className="contact-header">
//           <h2>Contact Us</h2>
//           <p>Leave us a message</p>
//         </div>
//         <form className="contact-form">
//           <div className="name-fields">
//             <div className="form-group">
//               <fieldset>
//                 <legend>First Name</legend>
//                 <input type="text" placeholder="First Name" required />
//               </fieldset>
//             </div>
//             <div className="form-group">
//               <fieldset>
//                 <legend>Last Name</legend>
//                 <input type="text" placeholder="Last Name" required />
//               </fieldset>
//             </div>
//           </div>
//           <div className="form-group">
//             <input type="email" placeholder="Email Address" required />
//           </div>
//           <div className="form-group">
//             <textarea
//               placeholder="Type your message here..."
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="send-btn">
//             Send Message
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;
