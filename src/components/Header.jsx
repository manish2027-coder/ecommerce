import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <div className=''>
      <div className='flex justify-between items-center p-2 bg-[#003d28] text-white px-7 text-xs'>
        <p><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+001234567890</p>
        <p>Get 50% Off on Selected Items&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/shop'>Shop Now</Link></p>
        <div className='flex gap-2'>
          <p>Eng</p>
          <p>India</p>
        </div>
      </div>
      <div className='text-black flex justify-between items-center p-5 font-medium mx-5'>
        <Link to="/"><img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="Logo" /></Link>
        <div className='flex gap-5'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Shop</NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Cart</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>Contact Us</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>About Us</NavLink>
        </div>
        <div className='border flex w-[318px] p-2 items-center justify-between rounded-2xl'>
          <input className='w-[90%] px-2 outline-0' type="text" placeholder='Search Product' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='flex gap-5 items-center'>
          <p className='text-sm'><i className="fa-regular fa-user text-lg"></i>&nbsp;&nbsp;&nbsp;Account</p>
          <p className='text-sm'><i className="fa-solid fa-cart-plus"></i>&nbsp;&nbsp;&nbsp;Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
