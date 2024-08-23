import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import page1 from '../../media/dengueduo.pdf'
import paze1 from '../../media/DengueDuopage1.png'
import paze2 from '../../media/DengueDuopage2.png'

function PdfViewer() {
    return (

      <div style={{ width: '100%',height:'100vh' }}>
        <iframe
          src={page1}
          width="100%"
          height="100%"
          title="PDF Document"
        />
      </div>
    );
  }

export default function DengueDuoPage(){
    return(
        <>
        <div style={{height:"10vh"}}></div>
        <img src={paze1} style={{width:'100%'}}></img>
        <img src={paze2} style={{width:'100%'}}></img>
        </>
    )

}