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
    <h2>Our Products</h2>

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
  