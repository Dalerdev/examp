import styled from "styled-components";

export const HistoryPage = styled.div`
 width:83.3%;
 padding:20px;
 margin-left:225px;
 background-color:#FAFAFA;
 height:fit-content;
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
`;
export const LoadingPage = styled.div`
 .loading {
  display: flex;
  justify-content: center;
  margin-left:450px;
  div {
    width: 1rem;
    height:1rem; 
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

export const Card = styled.div`
  width:32.5%;
  height:450px;
  padding:4px;

  margin-bottom:20px;
  border-radius:10px;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  
  .top{
    display: flex;
    width:32%;
    height:fit-content;
    justify-content: space-between;
    img{
    width:70px;
    height: 70px;
    margin-left:100px;
  }
  }
  table{
    width:100%;
    tr,td{
      /* border-bottom:1px solid black; */
      padding:10px;
      color:black;
      font-weight:500;
      text-align:left;
      border-collapse: collapse;
    }
    th{
      color:red;
      font-weight:500;
      text-align:left;
      /* border-bottom:1px solid black; */
      font-family: 'Poppins',sans-serif;
    }
  }
  .purchase{
    color:black;
    font-weight:bold;
    font-size:18px;
    font-family:'Poppins',sans-serif;
  }
`;
