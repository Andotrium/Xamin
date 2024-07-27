import "./App.css";
import React, { useEffect, useState } from "react";
// import logo from "./media/logo.jpeg";
import banner1 from "./media/desktopbanner.jpg"
import banner2 from "./media/mobilebanner.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDroplet, faMosquito, faBaby, faLungs,faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";


function Header({isMobile}) {
  const [scroll, setscroll] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", () => {
        setscroll(window.scrollY > 200);
      });
    }
  }, []);

  return (
    <div className={scroll ? "scrollheader" : "header"}>
      <h1>Xamin</h1>
      {isMobile ? <MobileDropdown /> : <DesktopDropdown />}

    </div>
  );
}

function DesktopDropdown() {
  return (

    <div className="desktopdropdown">
      <h2>About Us</h2>
      <h2>Our Products</h2>
      <h2>Contact Us</h2>
      <h2>Downloads</h2>
      <h2>Updates</h2>
      <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faMagnifyingGlass} />
    </div>

  );
}

function MobileDropdown() {
  return (
    <div className="dropdown">
      <FontAwesomeIcon style={{ color: "black", fontSize: '1.7em' }} icon={faBars} />
    </div>
  );
}

function AboutUs() {


  return (
    <>

      <div className="textcontainer">
              <h1 style={{ color: "rgb(59, 105, 166)",fontSize:"xx-large", textAlign: "center", marginTop:"35px"}}> About Us </h1>

        <h1 style={{marginTop:"30px"}}>Welcome to Xamin by Diagnocure India</h1>

        <h2>At Xamin, we are dedicated to revolutionizing healthcare through cutting-edge In-Vitro Diagnostics (IVD) kits. As a flagship brand of Diagnocure India, we leverage our extensive expertise and state-of-the-art technology to provide reliable, accurate, and efficient diagnostic solutions.</h2>

        <h1> Our Mission</h1>

        <h2>Our mission is to empower healthcare professionals with the tools they need to deliver precise and timely diagnoses. We believe that early and accurate detection is the cornerstone of effective treatment, and our IVD kits are designed to meet the highest standards of quality and reliability.</h2>

        <h1>Commitment to Quality</h1>

        <h2>Quality is at the heart of everything we do. Our IVD kits undergo rigorous testing and validation to ensure they meet international standards and deliver consistent results. We are committed to continuous improvement and innovation, striving to advance diagnostic capabilities and improve patient outcomes.</h2>

        <h1>Innovation and Technology</h1>

        <h2>At Xamin, we harness the latest advancements in medical science and technology to develop our diagnostic solutions. Our dedicated research and development team works tirelessly to stay ahead of industry trends, ensuring that our products are not only current but also pioneering in their field.</h2>

        <h1>Customer-Centric Approach</h1>

        <h2>We understand that our success is built on the trust and satisfaction of our customers. That’s why we prioritize their needs, providing comprehensive support and service to ensure seamless integration and optimal use of our IVD kits. Our goal is to build long-lasting relationships based on reliability and excellence.</h2>

        <h1>Global Reach, Local Impact**</h1>

        <h2>While we are proud of our Indian heritage, our vision extends beyond borders. Xamin’s IVD kits are designed to meet the diverse needs of healthcare providers worldwide, contributing to global health improvements while addressing local challenges with tailored solutions.</h2>

        <h1>Join Us in Shaping the Future of Diagnostics**</h1>

        <h2>We invite you to explore our range of innovative IVD kits and join us in our mission to transform healthcare through excellence in diagnostics. Together, we can make a meaningful difference in the lives of patients and communities around the world.</h2>

      </div>

    </>
  )
}

function Bannerwrap({isMobile}) {
  return (
    <div className="outerwrap">
    <div className="wrap">
      <div className="box1">
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)", fontSize: '1.8em' }} icon={faDroplet} />
        <h1>Blood Borne</h1>
        <h2>Our Blood Borne IVD kits provide precise detection of blood-borne pathogens, ensuring timely and accurate diagnoses for effective treatment and management.</h2>
      </div>
      <div className="box2">
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)", fontSize: '1.8em' }} icon={faMosquito} />
        <h1>Vector Borne</h1>
        <h2>Our Vector Borne IVD kits provide accurate detection of diseases transmitted by vectors such as mosquitoes and ticks, aiding in the early diagnosis and effective treatment of conditions like malaria and dengue.</h2>
      </div>
      <div className="box3">
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)", fontSize: '1.8em' }} icon={faBaby} />
        <h1>Fertility</h1>
        <h2>Our Pregnancy IVD kits offer reliable and rapid results, helping individuals and healthcare professionals make informed decisions during the crucial stages of pregnancy.</h2>
      </div>
      <div className="box4">
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)", fontSize: '1.8em' }} icon={faLungs} />
        <h1>Respiratory</h1>
        <h2>Our Respiratory IVD kits, including COVID-19 test kits, deliver accurate diagnostics for a range of respiratory conditions, enabling prompt and effective medical intervention.</h2>
      </div>
    </div>
    </div>
  )
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerwrapper">
          <div className="footerbox1">
            <h1>Useful Links</h1>
            <h2>About Us</h2>
            <h2> Our Products</h2>
            <h2>Contact Us</h2>
            <h2>Downloads</h2>
            <h2>Updates</h2>
          </div>
          <div className="vl"></div>
          <div className="footerbox2">
            <h1>Our Products</h1>
            <div className="category1">
              <h2>Vector Borne Disease</h2>
            <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faPlus} />
            </div>
            <div className="category2">
              <h2>Blood Borne Disease</h2>
            <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faPlus} />
            </div>
            <div className="category3">
              <h2>Hepatitis</h2>
            <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faPlus} />
            </div>
            <div className="category4">
              <h2>Cardiac Master</h2>
            <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faPlus} />
            </div>

            <div className="footerboxsplit">
              {}
            </div>
          </div>
           <div className="vl"></div>
          <div className="footerbox3">
            <h1>Contact Us</h1>
            <h2>WhatsApp : +91 70183 09056</h2>
            <h2>Call : +91 70183 09056 <br /></h2>
            <h2>Availability : 10am-6pm from Monday to Saturday</h2>
            <h2>Email : info@diagnocureindia.com <br /></h2>
            <h2>Address : Diagnocure India,<br />
              2, F/F, Electronics Complex, Chambaghat, Near Exicom Tele Systems Limited , Solan - 173213, Himachal Pradesh, India</h2>
          </div>
        </div>
      </div>
    </>
  );
}


export default function Myapp() {
  const [width, setwidth] = useState(window.innerWidth);
  let isMobile = width <= 768;

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div>
        <Header isMobile={isMobile}/>
      </div>
      <div className="headerblock">
      </div>
      <div className="banner">
        <img src={isMobile?banner2:banner1} style={{ width: "100%" }}></img>
      </div>
      <div style={{ height: "45vh" }}></div>
      <Bannerwrap />
      <div style={{ height: "0px" }}></div>

      <AboutUs />
      <Footer />
      <div className="copyright">
        <h2>© 2024, Diagnocure India. All Rights Reserved. Developed by <b>Andotrium</b></h2>
      </div>

    </>
  );
}
