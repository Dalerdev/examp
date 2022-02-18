import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/history/HistoryAction";
import { Card1, HistoryPage, LoadingPage, Text } from "./style";

function History() {
  const dispatch = useDispatch();
  const productL = useSelector((state) => state.productList);
  const { loading, success, error, data } = productL;

  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);
  return (
    <HistoryPage>
      {loading && (
        <LoadingPage>
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </LoadingPage>
      )}
      {success && "Success"}
      {error && "Error"}
      {productL?.data?.map(({ id, createdAt, productList },index) => (
        <Card1 key={id}>
         <div className="top">
         {/* <p>{index +1}</p> */}
          <img src="https://cdn-icons.flaticon.com/png/512/3145/premium/3145827.png?token=exp=1645032717~hmac=105000dcaa734794058c893f373bbe64" />
         </div>
          <table>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            
            {productList.map(
              ({ amount, product: {id, productName, price } },index) => (
                <>
                  <tr>
                    <td>{index +1}</td>
                    <td>{productName}</td>
                    <td>{amount}</td>
                    <td>${price}</td>
                    <td>${amount*price}</td>
                  </tr>
                </>
                
                
              )
            )}
          </table>
          <p className="purchase">Thank you for your purchase</p>
        </Card1>
      ))}
    </HistoryPage>
  );
}

export default History;
