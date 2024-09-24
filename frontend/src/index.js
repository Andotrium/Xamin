import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navabout from './pages/aboutus';
import Productpage from './pages/products';
import Header from './pages/Header';
import Contact from './pages/contact';
import Downloadpage from './pages/downloads';
import Updatespage from './pages/updates';
import Footer from './pages/footer';
import MobileHeader from './pages/mobile/mobileheader';
import Mobilefooter from './pages/mobile/mobilefooter';
import DengueDuoPage from './pages/productpages/dengueduo';
import DenguePage from './pages/productpages/dengue';
import DengueDay1Page from './pages/productpages/dengueday1';
import MalariaPage from './pages/productpages/malaria';
import MalariaPfPvPage from './pages/productpages/malariaPf';
import MalariaPfPanPage from './pages/productpages/malariaPfPan';
import Hiv from './pages/productpages/Hiv';
import HBs from './pages/productpages/hbsag';
import HCV from './pages/productpages/hcv';
import Syphilis from './pages/productpages/syphilis';
import Covid19 from './pages/productpages/covid19IgG';
import Typhoid from './pages/productpages/typhoid';
import DropNews from './pages/productpages/dropnews';
import { Analytics } from "@vercel/analytics/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
function Viewport(props){
  const [width,setwidth] = useState(window.innerWidth);
  function handlewindowresize(){
    setwidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', handlewindowresize);
  },[]
  )
  const isMobile = width <= 768;
  return(
    <>
    {isMobile?
    <MobileHeader />
    :
    <Header />}
    {props.children}
    {isMobile?
    <Mobilefooter />:
    <Footer />}
    </>
  )
}

root.render(
  <React.StrictMode>
    <Analytics />
    <BrowserRouter>
    <Viewport>
    <Routes>
      <Route index element={<App />} />
      <Route path='/about' element={<Navabout />} />
      <Route path='/products' element={<Productpage />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/downloads' element={<Downloadpage />} />
      <Route path='/updates' element={<Updatespage />} />
      <Route path='/products/dengueduo' element={<DengueDuoPage />} />
      <Route path='/products/dengue' element={<DenguePage />} />
      <Route path='/products/denguedayone' element={<DengueDay1Page />} />
      <Route path='/products/malaria' element={<MalariaPage />} />
      <Route path='/products/malariaPf' element={<MalariaPfPvPage />} />
      <Route path='/products/malariaPfPan' element={<MalariaPfPanPage />} />
      <Route path='/products/hiv' element={<Hiv />} />
      <Route path='products/hbsag' element={<HBs />} />
      <Route path='/products/hcv' element={<HCV />} />
      <Route path='/products/syphilis' element={<Syphilis />} />
      <Route path='/products/covid19' element={<Covid19 />} />
      <Route path='/products/typhoid' element={<Typhoid />} />
      <Route path='/products/dropnews' element={<DropNews />} />
    </Routes>
    </Viewport>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
