import React from "react";
import './dengueduo.css'
import paze1 from '../../media/DengueDuopage1.png'
import paze2 from '../../media/DengueDuopage2.png'
import paze3 from '../../media/DengueDuopage3.png'
import stockimage from '../../media/Dengue.png'
import ImageScroller from "../../tools/imagescroller";

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
        <img src={paze1} style={{ width: "100%" }}></img>
        <img src={paze2} style={{ width: "100%",marginTop:"30px" }}></img>
        <img src={paze3} style={{ width: "100%",marginTop:"30px",marginBottom:"30px" }}></img>
        </div>
      </div>
    </>
  )
}

export default function DengueDuoPage() {
  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <DesktopView />
    </>
  )

}