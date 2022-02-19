import styled from "styled-components";

export const CartWrappers=styled.div`
  width:82%;
  height:90vh;
  padding:10px;
  margin-left:225px;
  background-color:#F1F1F1;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  .table-cart{
    width:63%;
    height:fit-content;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color:white;
    padding:10px;
    margin-left:20px;

  }
  .priceCart{
    width:23%;
    height:300px;
    margin-right:10px;
    border-radius:10px;
    display:block;
    margin-left:735px;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color:white;
    padding:15px;
    z-index:999;
    position:fixed;
    .textCart{
      display:flex;
      justify-content:space-between;
      h1{
      font-weight:700;
      font-family:sans-serif;
      color:black;
      margin-left:20px;
    }
    .out{
      color:red;
      font-weight:500;
      font-family:'Poppins',sans-serif;
      text-decoration:none;

    }
    }

    .submit{
      margin-top:30px;
      margin-left:20px;
      line-height:28px;
      p{
        color:black;
        font-weight:600;
        font-family:'PT',sans-serif;
      }
    }
  }
`;

export const Cl =styled.div`
        width: 100%;
        display:flex;
        margin-top:50px;
    .buttonLeft{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        button{
            padding:10px;
            border:none;
            color:white;
            background-color:red;
            border-radius:15px;
                    }
    }
`;

export const Table = styled.table`
  width: 100%;
  &,th,td{
      border:1px solid white;
      text-align: center;
      color: black;
      padding: 7px;
      img{
        width:40px;
        height:40px;
      }
  }
  .update{
    border: none;
    padding:4px;
    color:black;
    font-size: 18px;
    background-color:none;
  }
  .delete{
    border: none;
    padding:4px;
    color:black;
    font-size: 25px;
    background-color:none;
  }
  .actiondelete{
    border: 1px solid black;
    color: black;
    padding: 6px;
    background-color:none;
  }
`;
export const Button = styled.button`
  padding: 10px;
  color: white;
  font-size: 16px;
`;