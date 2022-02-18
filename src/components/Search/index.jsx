import React, { useState } from "react";
import { SearchContainer } from "./style";
import search from "../../assets/image/search.svg";

import notification from "../../assets/image/notification.png";

function Search() {
  
  return (
    <SearchContainer>
      <div className="search">
        <div className="input">
          <input
            type="search"
            name="Search Product"
            placeholder="Search Product"
          />
          <img src={search} />
        </div>
        <div className="search-right">
          <img src={notification} />
          <div className="my">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/66/69/protective-mask-men-vector-24006669.jpg" className="myImg" />
            <p>Daler Isamitdinov</p>
          </div>
        </div>
      </div>
    </SearchContainer>
  );
}

export default Search;
