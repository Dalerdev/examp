import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ImgActive, LiBox, NavbarWrapper } from "./style";

function Navbar() {
  
  const location = useLocation();
  console.log(location);

  return (
    <NavbarWrapper>
      <div className="navbar-logo">
        <p>E-Commers</p>
      </div>
      <div className="nav-navbar">
        <ul className="nav">
          <LiBox active={location.pathname==='/'}>
            <Link to="/" className="link" >
              <img src="https://image.flaticon.com/icons/png/512/1159/1159412.png?w=740" />
              <p>Dashboard</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/products'}>
            <Link to="/products" className="link" >
              <img src="https://image.flaticon.com/icons/png/512/1237/1237002.png?w=740" />
              <p>Products</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/cart'} >
            <Link to="/cart" className="link" >
              <img src="https://image.flaticon.com/icons/png/512/1250/1250713.png?w=740" />
              <p>Cart</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/history'}>
            <Link to="/history" className="link">
              <img src="https://image.flaticon.com/icons/png/512/1207/1207170.png?w=740" />
              <p>History</p>
            </Link>
          </LiBox>
          <LiBox active={location.pathname==='/setting'}>
            <Link to="/setting" className="link">
              <img src="https://image.flaticon.com/icons/png/512/1250/1250708.png?w=740" />
              <p>Setting</p>
            </Link>
          </LiBox>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
