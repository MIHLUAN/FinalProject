import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMenuApi } from '../../redux/reducers/jobReducer';
import MenuHome from './MenuHome';
import { NavLink } from "react-router-dom";



const HeaderHome = () => {
    
   
    
  return (
    
   <div className='header-section w-100 '>
   <nav className=" navbar navbar-expand-lg  pt-0 pb-0">
  <div className="container-fluid">
    <a className="navbar-brand icon pt-0 pb-0" href="#">fiverr<span className=' dots-header'><i class="fa fa-circle"></i></span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div className="offcanvas offcanvas-start"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <form className="d-flex me-auto formSearch" role="search">
      <input className="inputSearchHeader" placeholder="What service are you looking for today?" aria-label="Search" />
      <button className="btn btnSearchHeader" type="submit"><i class="fa fa-search"></i></button>
  </form>
    <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="fa fa-globe"></i>English</a>  
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">US$ USD</a>  
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Become a Seller</a>  
      </li>
      <li className="nav-item"> 
        <NavLink to="/login" className="nav-link d-flex align-items-center text-white">
            Sign in
          </NavLink>
      </li >
      <NavLink to="/register" className="nav-link d-flex align-items-center text-white">
      <button className='buttonLogin'>Join</button>
    </NavLink>
      
    </ul>
      </div>
  
    </div>
  </div>
    
  </nav>
  
  <div className='menu'>
    <MenuHome/>
 </div>
</div>

  )
}

export default HeaderHome