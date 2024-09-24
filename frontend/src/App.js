import "./App.css";
import React, { useEffect, useState } from "react";
// import logo from "./media/logo.jpeg";
import banner1 from "./media/desktopbanner.jpg"
import banner2 from "./media/mobilebanner.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faMosquito, faBaby, faLungs, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";


function AboutUs() {


  return (
    <>

      <div className="textcontainer">
        <h1 style={{ color: "rgb(59, 105, 166)", fontSize: "xx-large", textAlign: "center", marginTop: "35px" }}> About Us </h1>

        <h1 style={{ marginTop: "30px" }}>Welcome to Xamin by Diagnocure India</h1>

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
function MobileBannerwrap() {
  const [scrollindex, setscrollindex] = useState(0);
  const info = [
    {
      icon: faDroplet,
      h1: 'Blood Borne',
      h2: 'Our Blood Borne IVD kits provide precise detection of blood-borne pathogens, ensuring timely and accurate diagnoses for effective treatment and management.'
    },
    {
      icon: faMosquito,
      h1: 'Vector Borne',
      h2: 'Our Vector Borne IVD kits provide accurate detection of diseases transmitted by vectors such as mosquitoes and ticks, aiding in the early diagnosis and effective treatment of conditions like malaria and dengue.'
    },
    {
      icon: faBaby,
      h1: 'Fertility',
      h2: 'Our Pregnancy IVD kits offer reliable and rapid results, helping individuals and healthcare professionals make informed decisions during the crucial stages of pregnancy.'
    },
    {
      icon: faLungs,
      h1: "Respiratory",
      h2: 'Our Respiratory IVD kits, including COVID-19 test kits, deliver accurate diagnostics for a range of respiratory conditions, enabling prompt and effective medical intervention.'
    }

  ];
  return (
    <>

      <div className="outerwrap">
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)",fontSize: '1em', padding: '15px', zIndex: "1" }} icon={faArrowUp} onClick={() => { scrollindex === 0 ? setscrollindex(3) : setscrollindex(scrollindex - 1) }} />
        <div className="wrap">
          <div className="box1">
            <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)", fontSize: '1.8em' }} icon={info[scrollindex].icon} />
            <h1>{info[scrollindex].h1}</h1>
            <h2>{info[scrollindex].h2}</h2>
          </div>
        </div>
        <FontAwesomeIcon style={{ color: "rgb(59, 105, 166)",fontSize: '1em', padding: '15px', zIndex: '1' }} icon={faArrowDown} onClick={() => { scrollindex === 3 ? setscrollindex(0) : setscrollindex(scrollindex + 1) }} />
      </div>
    </>
  )
}
function DesktopBannerwrap() {
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

function Bannerwrap({ isMobile }) {
  return (
    <>
      {isMobile ?
        <MobileBannerwrap /> :
        <DesktopBannerwrap />
      }
    </>
  )
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
      <div className="headerblock">
      </div>
      <div className="banner">
        <img src={isMobile ? banner2 : banner1} style={{ width: "100%" }}></img>
      </div>
      <div style={isMobile ? { height: "550px" } : { height: "45vh" }}></div>
      <Bannerwrap isMobile={isMobile} />
      <div style={{ height: "0px" }}></div>
      <AboutUs />
    </>
  );
}
