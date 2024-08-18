import "./aboutus.css"
import React, { useEffect, useState } from "react"
import ComingSoon from "./coming"


export default function About(){
  const [width,setwidth] = useState(window.innerWidth);
  function handlewindowresize(){
    setwidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', handlewindowresize);
  },[]
  )
  const isMobile = width <= 768;
    return(
    <>
      <div className="headerblock"></div>
      <div className="textboxoutline" style={{}}>
        {isMobile?
        <h1 style={{color:"rgb(59,105,166)", fontSize:"xx-large", textAlign:"center", marginTop:"35px"}}>Diagnocure(India) <br /></h1>:
        <h1 style={{ color: "rgb(59, 105, 166)", fontSize: "xxx-large", textAlign: "center", marginTop: "35px" }}>Diagnocure (India): Revolutionizing Healthcare <br />with Cutting-Edge Diagnostic Solutions</h1>}
        <h2>Diagnocure (India) is a pioneering healthcare initiative founded by renowned philanthropist Mr. Sunit Kumar. With a vision to serve mankind with the best in healthcare, Mr. Kumar and his team have leveraged their expertise in various industries, including manufacturing testing equipment, real estate, steel, and bi-metal products, to establish Diagnocure as a global leader in healthcare solutions. Since launching its first testing kit in 2015, Diagnocure has gained a stellar reputation for providing value-based, reliable, and innovative products in the healthcare market.</h2>
      </div>
      <div className="textbox">
        <h1 id='top'>Xamin by Diagnocure India </h1>

<h2><b>Welcome to Xamin by Diagnocure India </b></h2>

<h2>At Xamin, we are committed to revolutionizing healthcare through our state-of-the-art In-Vitro Diagnostics (IVD) kits. As the flagship brand of Diagnocure India, we combine our extensive expertise with cutting-edge technology to deliver reliable, accurate, and efficient diagnostic solutions.</h2>

<h1>Our Mission</h1>

<h2>Our mission at Xamin is to empower healthcare professionals with the tools they need for precise and timely diagnoses. We believe that early and accurate detection is the cornerstone of effective treatment, and our IVD kits are designed to meet the highest standards of quality and reliability.</h2>

<h2>
  <b>Commitment to Quality </b>

Quality is at the heart of everything we do at Xamin. Our IVD kits undergo rigorous testing and validation to ensure they meet international standards and deliver consistent results. We are dedicated to continuous improvement and innovation, striving to advance diagnostic capabilities and improve patient outcomes. <br />
<br />
<b> Innovation and Technology </b>

At Xamin, we harness the latest advancements in medical science and technology to develop our diagnostic solutions. Our dedicated research and development team works tirelessly to stay ahead of industry trends, ensuring that our products are not only current but also pioneering in their field.
<br />
<b>Customer-Centric Approach </b>

We understand that our success is built on the trust and satisfaction of our customers. That’s why we prioritize their needs, providing comprehensive support and service to ensure seamless integration and optimal use of our IVD kits. Our goal is to build long-lasting relationships based on reliability and excellence.
<br />
<b>Global Reach, Local Impact </b>

While we are proud of our Indian heritage, our vision extends beyond borders. Xamin’s IVD kits are designed to meet the diverse needs of healthcare providers worldwide, contributing to global health improvements while addressing local challenges with tailored solutions.
<br />
<b>Join Us in Shaping the Future of Diagnostics </b>

We invite you to explore our range of innovative IVD kits and join us in our mission to transform healthcare through excellence in diagnostics. Together, we can make a meaningful difference in the lives of patients and communities around the world. </h2>
</div>
<div className="textboxoutline">
<h1> Why Choose Diagnocure and Xamin?</h1>

<h2><b>- Trusted Leader in Healthcare:</b>Since 2015, Diagnocure has been a trusted name in healthcare, known for innovative and reliable diagnostics.
<br />
<b>- Cutting-Edge Technology:</b> Xamin by Diagnocure India leverages the latest advancements in medical technology to provide superior IVD kits.
<br />
<b>- Global Standards of Quality:</b> Our products meet international standards, ensuring accuracy and reliability in every test.
<br />
<b>- Customer-Focused Service:</b> We prioritize customer satisfaction with comprehensive support and seamless integration of our diagnostic solutions.
<br />
<b>- Innovative Research and Development:</b> Our R&D team is dedicated to staying ahead of industry trends and pioneering new advancements in diagnostics.
</h2>
<h1><b>Choose Diagnocure and Xamin for your diagnostic needs and experience the difference that quality, innovation, and dedication can make in healthcare. Join us in shaping the future of diagnostics and improving patient outcomes worldwide.</b></h1>
      
  </div>

    </>
    )
}