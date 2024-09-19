import React from "react";
import './dengueduo.css'
import paze1 from '../../media/DengueDuopage1.png'
import paze2 from '../../media/DengueDuopage2.png'
import paze3 from '../../media/DengueDuopage3.png'
import stockimage from '../../media/Dengue.png'
import ImageScroller from "../../tools/imagescroller";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { useState,useEffect } from "react";

const images = [
  { id: 1, src: stockimage, alt: 'Image 1' },
  { id: 2, src: paze1, alt: 'Image 2' },
  { id: 3, src: paze2, alt: 'Image 3' },
  { id: 4, src: paze3, alt: 'Image 4' },
  // Add more images as needed
];

function DesktopView() {
  return (
    <>
      <div id="playground">
        <div id="image">
          {/* <img src={stockimage}></img> */}
          <ImageScroller images={images} />
        </div>
        <div id="info">
          <h1>Xamin Dengue Duo</h1>
          <h4>One Step Dengue NS1(Ag) + IgG/IgM (Ab) Rapid Test Device</h4>
          <h3>
            Xamin Dengue Duo is an immunochromatographic assay
            for the detection of NS1 antigen and Dengue virus-specific
            IgG/IgM  antibodies  in  human  Serum/Plasma  and  Whole
            Blood.  By  detecting  the  NS1  antigen,  not  only  the  early
            infection can be detected, but also Dengue virus-specific
            IgG and IgM can be detected at the same time. Screening
            test results can be obtained within 5-20 minutes with high
            sensitivity  and  specificity,  it  is  intended  as  an  aid  in  the
            earlier diagnosis of Dengue infections
          </h3>
          <button>Download PDF</button>
          <h2 style={{ color: "red" }}>Note:</h2>
<ul>
  <li>Confirm results with other available higher techniques before reporting.</li>
  <li>This test is for in vitro diagnostic use only.</li>
  <li>Detection of antibodies against all four dengue virus serotypes.</li>
  <li>Detection of antigens against all four dengue virus serotypes.</li>
</ul>

          {/* <h4>
            Product Description
          </h4> */}
        </div>
      </div>
      <div id="lowerpage">
        <div id="lowerpageimg">
          <Accordion allowToggle>
            <AccordionItem>
          <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Test Description</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze1} style={{ width: "100%" }}></img>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Test Result</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze2} style={{ width: "100%",marginTop:"30px" }}></img>
        <h3 style={{color:'red'}}><b>*ATTENTION:</b> Serum/Plasma and Whole blood tests are different variants and hence shall be
        ordered as per the demand for the particular variant.</h3>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Ordering Information</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze3} style={{ width: "100%",marginTop:"30px",marginBottom:"30px" }}></img>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>
    </>
  )
}
function MobileView(){
  return(
    <>
    <div id="imagemobile">

      <ImageScroller images={images} />
    </div>


      <div id="infomobile">
          <h1>Xamin Dengue Duo</h1>
          <h4>One Step Dengue NS1(Ag) + IgG/IgM (Ab) Rapid Test Device</h4>
          <h3>
            Xamin Dengue Duo is an immunochromatographic assay
            for the detection of NS1 antigen and Dengue virus-specific
            IgG/IgM  antibodies  in  human  Serum/Plasma  and  Whole
            Blood.  By  detecting  the  NS1  antigen,  not  only  the  early
            infection can be detected, but also Dengue virus-specific
            IgG and IgM can be detected at the same time. Screening
            test results can be obtained within 5-20 minutes with high
            sensitivity  and  specificity,  it  is  intended  as  an  aid  in  the
            earlier diagnosis of Dengue infections
          </h3>
          <button>Download PDF</button>
          <h2 style={{ color: "red" }}>Note:</h2>
<ul>
  <li>Confirm results with other available higher techniques before reporting.</li>
  <li>This test is for in vitro diagnostic use only.</li>
  <li>Detection of antibodies against all four dengue virus serotypes.</li>
  <li>Detection of antigens against all four dengue virus serotypes.</li>
</ul>

          {/* <h4>
            Product Description
          </h4> */}
        </div>

      <div id="lowerpage">
        <div id="lowerpageimg">
          <Accordion allowToggle>
            <AccordionItem>
          <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Test Description</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze1} style={{ width: "100%" }}></img>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Test Result</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze2} style={{ width: "100%",marginTop:"30px" }}></img>
        <h3 style={{color:'red'}}><b>*ATTENTION:</b> Serum/Plasma and Whole blood tests are different variants and hence shall be
        ordered as per the demand for the particular variant.</h3>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton className="dropdownbutton">
                <Box flex="1" textAlign="left">
                  <h2>Ordering Information</h2>
                </Box>
                <Box as="span" fontSize="30px" color="rgb(59, 105, 166)">+</Box>
              </AccordionButton>
              <AccordionPanel>
        <img src={paze3} style={{ width: "100%",marginTop:"30px",marginBottom:"30px" }}></img>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>

    </>
  )
}


export default function DengueDuoPage() {
  const [width,setwidth] = useState(window.innerWidth);
  function handlewindowresize(){
    setwidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', handlewindowresize);
  },[]
  )
  const isMobile = width <= 768;
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      {isMobile?
      <MobileView />
      :
    <DesktopView />}
    </>
  )

}