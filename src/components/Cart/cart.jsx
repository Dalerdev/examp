import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/modules/cart/Cart.Action";
import { Link } from "react-router-dom";
import { Button, CartWrapper, Cl, Table } from "./style";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const sellProducts = () => {
    const sellData = cart?.map(({id,chosen})=>(
      {
        amount:chosen,
        productId:id
      }
    ))
    console.log(sellData);

    axios
    .post('https://store-management-backend-app.herokuapp.com/api/v1/sale/sold',sellData)
    .then((res)=>{
      console.log('success',res.data);
    })
    .catch((err)=>{
      console.log(err);
    })

  };
  // https://store-management-backend-app.herokuapp.com/api/v1/sale/sold
  return (
    <>
      <CartWrapper>
        <div className="table-cart">
          <Table>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              {/* <th>+/-</th> */}
            </tr>
            {cart.map(
              ({ id, productName, price, amount, imageId, chosen }, index) => (
                <tr key={id}>
                  <td>
                    {" "}
                    <img
                      src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                    />
                  </td>
                  <td>{productName}</td>
                  <td>${price}</td>
                  <td>
                    <button
                      className="update"
                      disabled={amount <= chosen}
                      onClick={() => dispatch(increment(index))}
                    >
                      +
                    </button>{" "}
                    {chosen}{" "}
                    <button
                      className="delete"
                      disabled={chosen <= 1}
                      onClick={() => dispatch(decrement(index))}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="actiondelete"
                      onClick={() => dispatch(removeFromCart(index))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </Table>
        </div>
        <div className="price-cart">
          <div className="txt-cart">
            <h1>Price</h1>
            <Link to="/products" className="out">
              Out
            </Link>
          </div>
          <div className="sub">
            <p>Tax:10%</p>
            <p>Total:{cart.reduce((t, v) => t + v.chosen, 0)}</p>
            <p>
              Sub Total:${cart.reduce((t, v) => t + v.chosen * v.price - 10, 0)}
            </p>
          </div>
          <Cl>
            <div className="btn-left">
              <Button onClick={() => dispatch({ type: "CLEAN" })}>Clean</Button>
              <button onClick={sellProducts()}>Sell</button>
            </div>
          </Cl>
        </div>
      </CartWrapper>
    </>
  );
}

export default Cart;
