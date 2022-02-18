import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/cart";
import History from "../components/History";
import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import ProductPage from "../components/Products";
import Search from "../components/Search";
import { MainPageContainer } from "./style";

function MainPages({props}) {

  return (
    <>
      <MainPageContainer>
    <Search/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          {/* <Redirect to={{pathname: '/login',state: {from: props.location}}}/> */}
        </Routes>
      </MainPageContainer>
    </>
  );
}

export default MainPages;
