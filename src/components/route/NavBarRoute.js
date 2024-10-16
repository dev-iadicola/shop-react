import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from '../NavBar';
import Shop from './screen/Shop';
import Cart from './screen/Cart';
import { SocialBar } from '../utilitis/link';

const NavBarRoute = () => {

  return (
    <BrowserRouter>
      {/* Navbar */}
     <NavBar/>
   

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <div className="social-links d-flex flex-row flex-md-row  d-flex justify-content-center align-items-center mx-auto ">
                        <SocialBar />
                    </div>
    </BrowserRouter>

    
  );
};

export default NavBarRoute;