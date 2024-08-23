import React from "react";
import page1 from '../../media/denguepage.png'
import page2 from '../../media/denguepage2.png'

export default function DenguePage(){
    return(
        <>
        <div style={{height:"10vh"}}></div>
        <img src={page1} style={{width:"100%"}}></img>
        <img src={page2} style={{width:"100%"}}></img>
        </>
    )
}