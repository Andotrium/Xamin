import React, { useState } from "react";
import image1 from "./media/image1.jpg"
import image2 from "./media/image2.jpg"
import image3 from "./media/image3.jpg"
import image4 from "./media/image4.jpg"
import image5 from "./media/image5.jpg"
import "./image_slider.css"

export default function Image() {
    const [index, setindex] = useState(0)

    const collection = [{
        label: "image 1",
        src: image1
    },
    {
        label: "image 2",
        src: image2
    },
    {
        label: "image 3",
        src: image3
    },
    {
        label: "image 4",
        src: image4
    },
    {
        label: "image5",
        src: image5
    }
    ]
    const handlenext = () => {
        if (index < collection.length - 1) setindex(index + 1);
        else setindex(0);
    }
    const handleback = () => {
        if(index>0) setindex(index-1);
        else setindex(collection.length -1);
    }

    return (
        <div className="scroller-container">
            <button className="nav-button left" onClick={handleback}>&lt;</button>
            <div className="image-wrapper">
                <img src={collection[index].src} alt={collection[index].label} className="scroller-image" />
            </div>
            <button className="nav-button right" onClick={handlenext}>&gt;</button>
        </div>
    )
}