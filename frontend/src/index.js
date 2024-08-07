import React from 'react';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<App />} />
      <Route path='/about' element={<Navabout />} />
      <Route path='/products' element={<Productpage />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='/downloads' element={<Downloadpage />} />
      <Route path='/updates' element={<Updatespage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
