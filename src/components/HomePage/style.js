import styled from "styled-components";

export const HomePageWrapper = styled.div`
width: 80.3%;
height: fit-content;
margin-left:225px;
background-color: #FAFAFA;
.wrapper{
        width:100%;
        height:200px;
        padding:10px;
        display:flex;
        justify-content: space-between;
        .mini-card{
            width:23.5%;
            height:140px;
            padding:20px;
            margin-left: 5px;
            line-height: 23px;
            border-radius: 10px;
            background-color:#fff;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            .card-image{
                display: flex;
                justify-content: space-between;
                .img1{
                    background-color: #EEF7FF;
                    border-radius:50%;
                    padding: 10px;
                    margin-top: -8px;
                    img{
                        width:30px;
                        margin-top: 4px;
                       
                    }
                   
                }
                .img2{
                    margin-top: -15px;
                    width:30px;
                    height:30px;
                }
            }
            .price-card{
                font-size: 18px;
                font-weight: bold;
                font-family: "Poppins",sans-serif;
                color:black;
                margin-top: 14px;
            }
            .card-total{
                display: flex;
                justify-content: space-between;

                .bb{
                    display: flex;
                    justify-content: space-between;
                    img{
                        width:20px;
                        height: 20px;
                        filter: invert(54%) sepia(28%) saturate(1078%) hue-rotate(94deg) brightness(93%) contrast(88%);
                        transform: rotate(-30deg);
                    }
                    .src{
                        width:20px;
                        transform: rotate(40deg);
                        height: 20px;
                        filter: invert(33%) sepia(87%) saturate(1432%) hue-rotate(341deg) brightness(104%) contrast(105%);
                    }
                    p{
                        color:#28AD63;
                        font-size: 14px;
                      
                    }
                    .p{
                        color:red;
                        font-size: 14px;
                    }
                    
                    .title-card{
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .middle{
        width:100%;
        display: flex;
        height: 280px;
        justify-content: space-between;
        .apexcharts1{
            padding:10px;
            margin-top:-25px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-left: 15px;
            width:60%;
            height:330px;
            .title-chart{
                p{
                    color:grey;
                    font-size:17px;
                    font-weight:600;
                    font-family:'Poppins',sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    color:grey;
                    padding:5px;
                    border-radius:10px;
                    border:1px solid grey;
                    option{
                        color:grey;
                    }
                }
            }
        }
        .apexcharts1{
            height: calc(100%-30px)
        }
        .apexcharts2{
            padding:10px;
            margin-top:-25px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-right:10px;
            margin-left: 20px;
            width:35%;
            height:330px;
            .title-chart{
                p{
                    color:grey;
                    font-size:17px;
                    font-weight:600;
                    font-family:'Poppins',sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    color:grey;
                    padding:5px;
                    border-radius:10px;
                    border:1px solid grey;
                    option{
                        color:grey;
                        border:1px solid grey;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
    .bottom{
        width:100%;
        height:fit-content;
        padding:20px;
        display: flex;
        justify-content: space-between;
        .table{
            width:670px;
            height:310px;
            padding:10px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            background-color: white;
            margin-top: 33px;
            p{
                color:black;
                font-weight: bold;
                font-size: 19px;
                margin-left:25px;
                margin-top:10px;
                font-family: sans-serif;
            }
           table{
               width:100%;
           }
            td img{
                width:30px;
                height: 30px;
                
            }
           .bg{
               color:yellow;
               background-color: #FFF8ED;
               border-radius:10px;
  
               padding: 8px;
           }
           .bg2{
               color:green;
               border-radius: 10px;
               padding: 8px;
               background-color: #ECFBF2;
           }
           .bg3{
               color:red;
               border-radius: 10px;
               padding: 6px;
               background-color: #FFEFEB;
           }
            tr,th,td{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom:-5px;
                padding:10px;
                border:none;
                font-size:15px;
            }
        }
        .table-footer{
            a{
           margin-top: 20px;
           margin-left: 300px;
           text-decoration:none;
           color:black;
           font-size:normal;
           font-family: 'Poppins';
            }
          a:hover{
              color:#9DA2A8;
          }
          a:focus{
              color:#9DA2A8;
          }
        }
        .charts{
            padding:10px;
            margin-top:30px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-left:700px;
            position: absolute;
            width:395px;
            height:310px;
     
        }
       
    }
`;