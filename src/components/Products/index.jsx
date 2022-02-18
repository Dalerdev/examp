import React, { useEffect, useState } from "react";

import { ProductWrapper,LoadingPage } from "./style";
import { getProductAction } from "../../redux/modules/GetProduct/getProdcuct.Action";
import { useDispatch, useSelector } from "react-redux";
import Add from "../Update Cart";
import { addToCart } from "../../redux/modules/cart/Cart.Action";

function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.getProduct);
  const { loading, success, error, data } = product;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    dispatch(getProductAction());
  }, []);



  return (
    <>
      <ProductWrapper>
        <div className="text-product">
          <h3 className="text">Products</h3>
        </div>
        <div className="df-products">
          <div className="div">
            <div className="cp1">
              <p>
                <span>All Product</span>t
              </p>
            </div>
            <div className="cp2">
              <p>Completed</p>
            </div>
            <div className="cp3">
              <p>Panding</p>
            </div>
            <div className="cp4">
              <p>Cancel</p>
            </div>
          </div>
          <div className="popup">
            <div className="shopping-cart2">
              <a>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" onClick={toggleModal} />
              </a>
            </div>
            {modal && (
              <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                  <Add />
                  <button className="close-modal" onClick={toggleModal}>
                    {" "}
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/1263/premium/1263650.png?token=exp=1644950326~hmac=4e6f9f21ebb4aaea489766de8a68da9b"
                      alt="hh"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="product">
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
          <table>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Data</th>
              <th>Price</th>
              <th>Buy</th>
            </tr> 
            
            {product.data
              .filter((v, i) => !cart.some((value) => value.id === v.id))
              .map(
                (
                  { id, productName, price, imageId, description, category },
                  index
                ) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{id}</td>
                    <td>
                      {" "}
                      <img
                        src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </td>
                    <td>
                      <p>{productName}</p>
                    </td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/1255/1255216.png'
                        className="add"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              imageId,
                              productName,
                              chosen: 1,
                              price,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                )
              )}
          </table>
        </div>
      </ProductWrapper>
    </>
  );
}

export default ProductPage;
