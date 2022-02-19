import React, { useState } from "react";
import { SearchContainer } from "./style";




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
          <img src="https://image.flaticon.com/icons/png/512/1127/1127976.png?w=740" />
        </div>
        <div className="search-right">
          <img src="https://www.freepik.com/free-icon/bell_15504323.htm#query=notification&position=49&from_view=search" />
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
