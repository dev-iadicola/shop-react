import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from '../NavBarComponents/NavBar';
import Shop from './screen/Shop';
import Cart from './screen/Cart';
import { SocialBar } from '../utilitis/link';
import Footer from '../Footer';
import WishListComponent from './screen/WishListComponent';
import ErrorPage from './screen/ErrorPage';

const NavBarRoute = () => {

  return (
    <BrowserRouter>
      {/* Navbar */}
     <NavBar/>

     
   

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishListComponent/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>

      <Footer/>

      
    </BrowserRouter>

    
  );
};

export default NavBarRoute;