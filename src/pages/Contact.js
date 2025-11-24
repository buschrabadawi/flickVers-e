import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, email us at:</p>
      <a href="mailto:support@flickverse.com" className="contact-email">
        support@flickverse.com
      </a>
    </div>
  );
};

export default Contact;
