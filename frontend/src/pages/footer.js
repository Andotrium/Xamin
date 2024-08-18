import React from "react";
import "./footer.css"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

function Dropdown() {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton className="category1">
            <h2>
              Respiratory
            </h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              Covid-19 Ag <br />
              Covid -19 IgG Ab
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>Vector Borne Disease</h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              Dengue Duo <br />
              Dengue Ns1 Ag <br />
              Dengue IgG/IgM Ab <br />
              Chikungunya IgG/IgM <br />
              Leptospira IgG/IgM <br />
              Malaria Pf Ag <br />
              Malaria Pf/Pv Ag <br />
              Malaria Pf/Pan Ag <br />
              Typhoid IgG/IgM Ab <br />
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>Blood Borne Disease</h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              HIV 1/2 Triline Ab <br />
              Syphilis Ab <br />
              HIV/Syphilis Combo <br />
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>
              Hepatitis
            </h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              HBsAg <br />
              HCV Ab
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>Gastorintestinal Disease</h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              H.Pylori Ab
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>Cardiac Marker</h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              Troponin I
            </h3>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton className="category1">
            <h2>Fertility</h2>
            <AccordionIcon style={{ color: "white" }} />
          </AccordionButton>
          <AccordionPanel>
            <h3>
              One step Urine Pregnancy Test (Mini) <br />
              One step Urine Pregnancy Test (Maxi) <br />
              One step Urine/Serum Pregnancy Test Device <br />
              LH Ovulation <br />
            </h3>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default function Footer() {

  return (
    <>
      <div className="footer">
        <div className="footerwrapper">
          <div className="footerbox1">
            <h1>Useful Links</h1>
            <nav>
              <Link to={'/about'} style={{ textDecoration: "none" }}>
                <h2>About Us</h2>
              </Link>
            </nav>
            <nav>
              <Link to={'/products'} style={{ textDecoration: 'none' }}>
                <h2> Our Products</h2>
              </Link>
            </nav>
            <nav>
              <Link to={'/contacts'} style={{ textDecoration: "none" }}>
                <h2>Contact Us</h2>
              </Link>
            </nav>
            <nav>
              <Link to={'/downloads'} style={{ textDecoration: "none" }}>
                <h2>Downloads</h2>
              </Link>
            </nav>
            <nav>
              <Link to={"/updates"} style={{ textDecoration: "none" }}>
                <h2>Updates</h2>
              </Link>
            </nav>
          </div>
          <div className="vl"></div>
          <div className="footerbox2">
            <h1>Our Products</h1>
            <Dropdown />
          </div>
          <div className="vl"></div>
          <div className="footerbox3">
            <h1>Contact Us</h1>
            <h2><b>WhatsApp</b> : +91 9615096156</h2>
            <h2><b>Call</b> : +91 9615096156 <br /></h2>
            <h2><b>Availability</b> : 10am-6pm from Monday to Saturday</h2>
            <h2><b>Email</b> : info@diagnocureindia.com <br /></h2>
            <h2><b>Address</b> : Diagnocure India,<br />
              #2, F/F, Electronics Complex, Chambaghat
              Distt. Solan H.P. - 173213</h2>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h2>© 2024, Diagnocure India. All Rights Reserved. Developed by <b>Andotrium</b></h2>
      </div>
    </>
  );
}