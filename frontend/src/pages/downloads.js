import React from "react";
import "./downloads.css"
import cover from "../media/e-catalogue_cover.png"

export default function Downloadpage() {
    return (
      <>
        <div className="headerblock"></div>
        <div id="catalogue-container">
          <div className="catalogue">
            <img src={cover} alt="Catalogue 1" />
            <button>Download Catalogue 1</button>
          </div>
          <div className="catalogue">
            <img src={cover} alt="Catalogue 2" />
            <button>Download Catalogue 2</button>
          </div>
        </div>
      </>
    );
  }