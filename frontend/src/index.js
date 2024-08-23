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
    <BrowserRouter>
    <Viewport>
    <Routes>
      <Route index element={<App />} />
      <Route path='/about' element={<Navabout />} />
      <Route path='/products' element={<Productpage />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/downloads' element={<Downloadpage />} />
      <Route path='/updates' element={<Updatespage />} />
      <Route path='/dengueduo' element={<DengueDuoPage />} />
      <Route path='/dengue' element={<DenguePage />} />
      <Route path='/denguedayone' element={<DengueDay1Page />} />
      <Route path='/malaria' element={<MalariaPage />} />
    </Routes>
    </Viewport>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
