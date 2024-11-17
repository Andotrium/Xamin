import React, { useState } from "react";
import "./testproducts.css";
import topbanner from "../media/eye_banner.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import dengueDuo from "../media/DengueDuo.png";
import dengue from "../media/Dengue.png";
import dengueDay1 from "../media/Dengue Day 1.png";
import malaria from "../media/Malaria.png";
import hiv from "../media/HIV.png";
import hbsag from "../media/HBsAg.png";
import hcv from "../media/HCV.png";
import syphilis from "../media/Syphilis.png";
import covid from "../media/covidab.png";
import dropnews from "../media/Drop News.png";
import DengueDuoPage from '../pages/productpages/dengueduo';


// Dropdown menu for all the products
const products = [
  {
    row: 1,
    name: "Xamin COVID-19 IgG/IgM",
    description:
      "Xamin COVID-19 IgG/IgM Test Kit is a rapid immunochromatography test designed for the qualitative presumptive detection of specific IgG and IgM to SARS-CoV-2 in human Serum/Plasma/Whole Blood. It is intended as an aid in the earlier diagnosis of COVID-19 Infections.",
    image: covid,
    path: "covid19",
    tag: "Respiratory",
  },
  {
    row: 2,
    name: "Xamin Dengue Duo",
    description:
      "Xamin Dengue Duo is an immunochromatographic assay for the detection of NS1 antigen and Dengue virus-specific IgG/IgM antibodies in human Serum/Plasma and Whole Blood. By detecting the NS1 antigen, not only the early infection can be detected, but also Dengue virus-specific IgG and IgM can be detected at the same time. Screening test results can be obtained within 5-20 minutes with high sensitivity and specificity, it is intended as an aid in the earlier diagnosis of Dengue infections.",
    image: dengueDuo,
    path: "dengueduo",
    tag: "Vector Borne",
  },
  {
    row: 2,
    name: "Xamin Dengue",
    description:
      "Xamin Dengue IgG/IgM qualitatively analyzes IgG and IgM antibodies specific to Dengue virus in Serum/Plasma and Whole Blood using immunochromatography technique. By detecting IgG and IgM specific to Dengue virus, the primary and secondary Dengue virus infections can be discriminated, and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Dengue Infection.",
    image: dengue,
    path: "dengue",
    tag: "Vector Borne",
  },
  {
    row: 2,
    name: "Xamin Dengue Day1",
    description:
      "Xamin Dengue Day 1 qualitatively analyzes Ns1 antigens specific to Dengue virus in Serum/Plasma and Whole Blood using immunochromatography technique. By detecting Dengue Ns1 antigens, the early infection status of Dengue virus can be discriminated, and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Dengue Infection.",
    image: dengueDay1,
    path: "denguedayone",
    tag: "Vector Borne",
  },
  {
    row: 2,
    name: "Xamin Malaria",
    description:
      "Xamin Malaria Pf Ag is a product that qualitatively detects Plasmodium falciparum antigens in human whole blood using immunochromatography technique. The target antigen is Histidine-Rich Protein II (HRP-II), and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Malaria Pf Infection.",
    image: malaria,
    path: "malaria",
    tag: "Vector Borne",
  },
  {
    row: 2,
    name: "Xamin Malaria Pf/Pv Ag",
    description:
      "Xamin Malaria Pf/Pv Ag qualitatively detects Plasmodium falciparum and Plasmodium vivax antigens in human whole blood using immunochromatography technique. The target antigen is Histidine-Rich Protein II (HRP-II) of Plasmodium faciparum and plasmodium lactate dehydrogenase (pLDH) of Plasmadium vivax, and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Malaria Pf/Pv Infection.",
    image: malaria,
    path: "malariaPf",
    tag: "Vector Borne",
  },
  {
    row: 2,
    name: "Xamin Malaria Pf/Pan Ag",
    description:
      "Xamin Malaria Pf/Pan Ag is a rapid, visual and sensitive immunochromatography test that diagnosis all four Plas- modium Species (P.falciparum/P.vivax/P.malariae/P.ova- le) based on pLDH antigen in human whole blood. The third target antigen is aldolase, which is Pan-specific for all ma- laria species and the screening test result can be obtained within 5-20 minutes with its high sensitivity and specificity. It is intended as an aid in the earlier diagnosis of Malaria Pf/Pan Infection.",
    image: malaria,
    path: "malariaPfPan",
    tag: "Vector Borne",
  },
  {
    row: 3,
    name: "Xamin HIV 1/2 Triline Ab ",
    description:
      "Xamin HIV 1/2 Triline Ab performs qualitative analysis by detecting antibodies (IgG/IgM) specific to HIV-1 and HIV-2 in Serum/Plasma and Whole Blood using immunochromatography technique. With a simple test method,HIV infection status can be discriminated, and with its high sensitivity and specificity, the screening test result can be obtained within 5-20 minutes. It is intended as an aid in the earlier diagnosis of HIV1/2 Infection.",
    image: hiv,
    path: "hiv",
    tag: "Vector Borne",
  },
  {
    row: 3,
    name: "Xamin HBsAg",
    description:
      "Xamin HBsAg performs qualitative analysis by specifically detecting the surface protein antigens of hepatitis B virus in Serum/Plasma and Whole Blood using immunochromatography technique. With a simple test method, hepatitis B infection can be discriminated early and with its high sensitivity and specificity, the screening test result can be obtained within 5-20 minutes. It is intended as an aid in the earlier diagnosis of HBsAg Infection.",
    image: hbsag,
    path: "hbsag",
    tag: "Blood Borne",
  },
  {
    row: 3,
    name: "Xamin HCV Ab",
    description:
      "Xamin HCV Ab qualitatively analyzes antibodies specific to hepatitis C virus in Serum/Plasma and Whole Blood using immunochromatography technique. With a simple test method, hepatitis C infection can be discriminated early and with its high sensitivity and specificity, the screening test result can be obtained within 5-20 minutes. It is intended as an aid in the earlier diagnosis of HCV (Ab) Infection.",
    image: hcv,
    path: "hcv",
    tag: "Bood Borne",
  },
  {
    row: 3,
    name: "Xamin Syphilis Ab",
    description:
      "Xamin Syphilis Ab performs qualitative analysis by detecting antibodies specific to Treponema pallidum in Serum/Plasma and Whole Blood using immunochromatography technique. With a simple test method, Syphilis infection can be detected and with its high sensitivity and specificity, the screening test result can be obtained within 5-20 minutes. It is intended as an aid in the earlier diagnosis of Syphilis (TP) Infection.",
    image: syphilis,
    path: "syphilis",
    tag: "Blood Borne",
  },
  {
    row: 4,
    name: "Xamin Drop News",
    description:
      "Xamin Drop News hCG Rapid Pregnancy Test for the determination of hCG (Human Chorionic Gonadotropin) in Urine/Serum specimen. There is an appearance of hCG in Urine/Serum soon after conception and its subsequent rapid rise in concentration during early gestational growth. This Pregnancy test kit is used to obtain a visual, qualitative result for the early detection of pregnancy in just 5-7 minutes, it is intended as an aid in the earlier diagnosis of Pregnancy Infection.",
    image: dropnews,
    path: "dropnews",
    tag: "Fertility",
  },
  {
    row: 6,
    name: "Xamin Typhoid IgG/IgM Ab",
    description:
      "Xamin Typhoid IgG/IgM Ab Card is a rapid solid phase Immuno-chromatographic test for the qualitative differential and simultaneous detection of salmonella typhi (S. typhi) IgM and IgG antibodies in human Serum /Plasma and Whole Blood, it detects earlier diagnosis of typhoid infection and in the determination of recent and past infection in just 5-20 minutes, it is intended as an aid in the earlier diagnosis of Typhoid Infection.",
    image: syphilis,
    path: "typhoid",
    tag: "GastroIntestinal",
  },
];


function ProductAccordion({presentpagesetter}) {
  return (
    <div>
      <div className="itembox">
        <Accordion allowToggle>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>Respiratory</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel onClick={console.log('clicked')}>
              {products.map((x, index) => {
                if (x.row == 1) {
                  return (
                    <>
                      <h2>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>Vector Borne</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {products.map((x, index) => {
                if (x.row === 2) {
                  return (
                    <>
                      <h2 onClick={presentpagesetter(index)}>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>Blood Borne</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {products.map((x, index) => {
                if (x.row === 3) {
                  return (
                    <>
                      <h2>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>Fertility</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {products.map((x, index) => {
                if (x.row === 4) {
                  return (
                    <>
                      <h2>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>Cardiac Marker</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {products.map((x, index) => {
                if (x.row === 5) {
                  return (
                    <>
                      <h2>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="item">
            <AccordionButton className="itembutton">
              <h1>GastroIntestinal</h1>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {products.map((x, index) => {
                if (x.row === 6) {
                  return (
                    <>
                      <h2>{x.name}</h2>
                    </>
                  );
                }
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <h1>Contact Us</h1>
      <div className="formbox">
        <form className="contactform">
        <input 
            type="text"
            placeholder="Your Name"
            required
          />
        <input
            type="text"
            placeholder="Email"
            required
          />
        <input 
            type="number"
            placeholder="Phone number"
            required
          />
          <button className="formbutton">Submit</button>
          
        </form>
      </div>


    </div>
  );
}

export default function Main() {
  const[presentpage,setpresentpage] = useState(0);
  console.log(presentpage)

  return (
    <div>
      <div id="spacing"></div>
      <div className="productsbanner">
        <div className="centered_text">
          <h1>Products we offer</h1>
        </div>
        <div className="bannerimage">
          <img src={topbanner} alt=""></img>
        </div>
      </div>
      <div className="playground">
        <div className="productlist">
          <h1>All products</h1>
          <ProductAccordion presentpagesetter={setpresentpage} />
          {console.log(presentpage)}
        </div>
        <div className="presentproduct">
          <DengueDuoPage />
        </div>
      </div>
    </div>
  );
}
