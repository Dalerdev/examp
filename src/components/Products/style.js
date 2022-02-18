import styled from "styled-components";

export const ProductWrapper = styled.div`
width: 83%;
height: fit-content;
background-color:#FAFAFA;
margin-left:225px;
padding:10px;
.text-product{
        width:197px;
        padding:5px;
        margin-left:20px;
        .text{
        color:black;
        font-weight: bold;
        font-size: 26px;
        font-family: 'Roboto',sans-serif;
        }
    }
    .df-products{
        width:1000px;
        height:50px;

        margin-left:10px;
        display: flex;
        justify-content: space-between;
        .div{
        width:400px;
        height:50px;
        padding:10px;
        display: flex;
        justify-content: space-between;
            .cp1{
            width:110px;
            height: 20px;
            p{
                font-weight: bold;
                color:#45A5FF;
                cursor:pointer;
                span{
                    color:#45A5FF;
                font-weight: bold;
                font-family: 'Poppins',sans-serif;
                    border-bottom: 1px solid #45A5FF;
                }
            }
           
        }
     .cp2{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -55px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
                
            }
     }
     .cp3{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -30px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
              
            }
     }
     .cp4{
         color:black;
         cursor:pointer;
         margin-top: 4px;
         margin-left: -20px;
         font-weight: bold;
                font-family: 'Poppins',sans-serif;
                p:hover{
                color:#45A5FF;
              
            }
     }
        }
        .popup{
            .shopping-cart2{
                width:43px;
                height: 43px;
                padding: 10px;
                margin-top:-10px;
                margin-left:-10px;
                position: absolute;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                a{
                    img{
                    width:25px;
                    cursor:pointer;
                }
            }
            }
            .shopping-cart{
                width:50px;
                height: 46px;
                margin-top:-45px;
                margin-left:490px;
                padding: 10px;
                border-radius: 8px;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                a{
                    img{
                    width:30px;
                    cursor:pointer;
                }
            }
    }
            .active-modal{
                overflow-y:hidden;
            }
            .modal, .overlay {
                width: 100vw;
                height: 100vh;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                position: fixed;
            }

            .overlay {
                background: rgba(49,49,49,0.8);
            }
            .modal-content {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                line-height: 1.4;
                background: white;
                padding: 14px 28px;
                border-radius: 3px;
                margin:32px 10px;
                width: 700px;
                height: 600px;
            }

            .close-modal {
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 5px 8px;
                border:none;
                cursor: pointer;
                img{
                    width:20px;
                    height:20px;
                }
            }
        }
  
    }

    .product{
        width:100%;
        /* height:500vh; */
        padding:10px;
        table{
            width:100%;
            padding:10px;
           tr,th,td{
                /* border-bottom:1px solid black; */
                padding:10px;
                color:black;
                font-weight:500;
                text-align:center;
                font-family: 'Poppins',sans-serif;
                border-collapse: collapse;
                /* margin-bottom:-5px; */
                img{
                width:30px;
                height: 30px;
            }
            }

            .add{
                img{
                    width:30px;
                    height: 30px;
                }
               
                margin-top: 5px;
                margin-left: 10px;
            }
        }
    }

    .top{
        width: 100%;
        padding: 10px;
        display:flex;

    .btn-left{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        button{
            padding:10px;
            border:none;
            color:black;
            background-color:white;
            border-radius:10px;
            box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }
    }
    
}
`;

export const LoadingPage = styled.div`
 .loading {
  display: flex;
  justify-content: center;
  margin-left:100px;
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background-color: #45A5FF;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
  }
}
`;