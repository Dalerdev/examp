import React, { useState } from "react";
import axios from "axios";

import { AddProductWrapper, Button, FormWrapper, Input, InputWrapper, Label, Pap, Textarea, TitleProduct, TotalProduct } from "./style";
function Add() {
  const [image, setImage] = useState("");

  const [post, setPost] = useState([]);

  const [imageProcess, setImageProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [submitProcess, setSubmitProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const sendImage = (e) => {
    setImageProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const file = e.target.files[0];

    const form = new FormData();
    form.append("image", file);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
        form
      )
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
        setImageProcess({
          loading: false,
          success: true,
          error: false,
        });
      })
      .catch((err) => {
        console.log("error", err);
        setImageProcess({
          loading: false,
          success: false,
          error: true,
        });
      });
  };

  const submitproduct = (e) => {
    setSubmitProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const { productName, amount, description, category, price } = e.target;
    const post = {
      productName: productName.value,
      amount: amount.value,
      imageId: image,
      description: description.value,
      category: category.value,
      price: price.value,
    };

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/product",
        post
      )
      .then((res) => {
        console.log("succes", res.data);
        setPost("");
        setImage("");
        setSubmitProcess({
          loading: false,
          success: true,
          error: false,
        });
        e.target.reset();
      })
      .catch((err) => {
        setSubmitProcess({
          loading: false,
          success: false,
          error: true,
        });
        console.log("error", err);
      });
  };

  return (
    <>
    <TitleProduct>
        <p>Add Product</p>
      </TitleProduct>
    <AddProductWrapper>
      <FormWrapper onSubmit={submitproduct}>
        <InputWrapper>
        <Input type="text" name="productName" placeholder="Product Name" />
        <Input type="number" name="price" placeholder="Product Price" />  
        <Input type="number" name="amount" placeholder="Product Amount" />  
        <Input type="number" name="category" placeholder="Product Category" />  
        </InputWrapper>
        
        <Textarea placeholder="Write something awesome" name="description" />
        <Label>
          {imageProcess.loading ? (
            "Loading"
          ) : imageProcess.error ? (
            <b>error</b>
          ) : imageProcess.success ? (
            <img
              src={
                "https://store-management-backend-app.herokuapp.com/api/v1/attachment/" +
                image
              }
            />
          ) : (
            <img src="https://cdn-icons.flaticon.com/png/512/3979/premium/3979433.png?token=exp=1644950741~hmac=9a74142c396707c287fcd2244bbec359" className="img" />
          )}

          <input type="file" onChange={sendImage} />
         <div className="txt">
              <h3>Drop Select Or File</h3>
              <p>Drop Filse here or click <span>browse</span> thorought your machine</p>
         </div>
        </Label>
        <Button>
            <h4>Create Product</h4>
        </Button>

  
      </FormWrapper>
      
    </AddProductWrapper>
    
    </>
  );
}

export default Add;
