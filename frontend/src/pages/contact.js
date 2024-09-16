import React from "react";
import './contact.css';


export default function Contact() {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      
      <div id="main" style={{backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div id="form">
          <form>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
