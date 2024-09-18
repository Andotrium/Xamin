import React from "react";
import page1 from '../../media/malariapage1.png'
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

const images = [
  { id: 1, src: stockimage, alt: 'Image 1' },
  { id: 2, src: paze1, alt: 'Image 2' },
  { id: 3, src: paze2, alt: 'Image 3' },
  { id: 4, src: paze3, alt: 'Image 4' },
]



function DesktopView() {
    return (
      <>
        <div id="playground">
          <div id="image">
            {/* <img src={stockimage}></img> */}
            <ImageScroller images={images} />
          </div>
          <div id="info">
            <h1>Xamin Dengue</h1>
            <h4>One Step Dengue IgG/IgM (Ab) Rapid Test Device</h4>
            <h3>
              Xamin Dengue IgG/IgM qualitatively analyzes IgG and IgM antibodies specific to Dengue virus in Serum/Plasma and Whole Blood using immunochromatography technique. By detecting IgG and IgM specific to Dengue virus, the primary and secondary Dengue virus infections can be discriminated, and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Dengue Infection.
            </h3>
            <button>Download PDF</button>
            <h2 style={{ color: "red" }}>Note:</h2>
  <ul>
    <li> Confirm results with other available higher techniques before reporting.</li>
    <li>This test is for in vitro diagnostic use only.</li>
    <li>Detection of antibodies against all four dengue virus serotypes.</li>
  </ul>
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

export default function MalariaPfPvPage(){
    return(
        <>
        <div style={{height:"10vh"}}></div>
        <DesktopView />
        </>
    )
}