import "./header.css";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDroplet, faMosquito, faBaby, faLungs, faPlus, faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box
} from '@chakra-ui/react'

function Productsmenu(){
  return (
    <>
    
    <div style={{height:"10vh"}}></div>
    <div id="productlist">
      <h1>yes</h1>
    </div>


    </>
  )
}

function DesktopDropdown({producthover}) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
  }
  return (
    <>
    <div className="desktopdropdown" style={style}>
      <nav>
        <Link to={"/about"} style={{textDecoration:"none"}}>
      <h2>About Us</h2>
        </Link>
      </nav>
      <nav>
        <Link to={"/products"} style={{textDecoration:"none"}}>
        <Popover>
  <PopoverTrigger>
    <h2>Our Products</h2>
  </PopoverTrigger>
  <PopoverContent color='white.800' bg='blue.800' borderColor='blue.700' borderRadius='12px' maxWidth='300px' zIndex='10'>
    <PopoverArrow bg='blue.700' />
    <PopoverCloseButton color='white' width='10px' right='0' bg='transparent' border='0px red solid' />
    <PopoverHeader fontWeight='bold' fontSize='18px' borderBottom='1px solid white' textAlign='center'>
      
    </PopoverHeader>
    <PopoverBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' padding='16px'>
      <div id="popovertext" style={{ textAlign: 'center', lineHeight: '1.6', fontSize: '14px', marginBottom: '12px' }}>
        <strong>Choose a category:</strong><br />
        <span style={{ display: 'block', marginTop: '8px' }}>Respiratory</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Vector Borne Disease</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Blood Borne Disease</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Hepatitis</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Gastorintestinal Disease</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Cardiac Marker</span>
        <span style={{ display: 'block', marginTop: '8px' }}>Fertility</span>
      </div>
    </PopoverBody>
  </PopoverContent>
</Popover>



      {/* <h2>Our Products</h2> */}
        </Link>
      </nav>
      <nav>
        <Link to={"/contacts"} style={{textDecoration:"none"}}>
      <h2>Contact Us</h2>
        </Link>
      </nav>
      <nav>
        <Link to={"/downloads"} style={{textDecoration:"none"}}>
      <h2>Downloads</h2>
        </Link>
      </nav>
      <nav>
        <Link to={"/updates"} style={{textDecoration:"none"}}>
      <h2>Updates</h2>
        </Link>
      </nav>
      <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faMagnifyingGlass} />
    </div>

    </>
  );
}



export default function Header({ isMobile }) {
    const [scroll, setscroll] = useState(false);
    const [producthover,setproducthover] = useState(false)
  
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener("scroll", () => {
          setscroll(window.scrollY > 200);
        });
      }
    }, []);
  
    return (
      <>
      <div className={scroll ? "scrollheader" : "header"}>
        <nav>
            <Link to={"/"} style={{textDecoration:"none"}}>
        <h1>Xamin</h1>
            </Link>
        </nav>
        <DesktopDropdown />
  
      </div>

        
      </>
    );
  }
  