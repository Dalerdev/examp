import styled from "styled-components";

export const SearchContainer = styled.div`
width: 100%;
/* margin: 3px 195px; */
margin-left: 200px;
/* position: absolute; */
height: 60px;
background-color: white;
.search{
 width: 1100px;
 padding:10px;
 height: 60px;
 display: flex;
 justify-content: space-between;
 .input{
     width:360px;
     height: fit-content;
     padding: 10px;
     display: flex;
     justify-content: space-between;
     background-color: #FAFAFA;
     border-radius: 10px;
     margin-left: 50px;
     input{
         border:none;
         color:black;
         font-family: 'Poppins';
         font-size: 14px;
         padding:5px;
         background-color: #FAFAFA;
     }
     input:active{
         border: none;
     }
     img{
         padding-right: 5px;
         width: 20px;
     }
 }
 .search-right{
     /* width: 160px; */
     padding: 1rem;
     display: flex;
     margin-right:30px;
     img{
         width:20px;
         height: 20px;
         margin-top: 10px;
     }
     .my{
         width: 160px;
         height: 55px;
         padding:10px;
         display: flex;
         border:1px solid #FAFAFA;
         border-radius: 8px;
         margin-left: 20px;
         margin-top:-5px;
         p{
           font-family: 'Poppins', sans-serif;
           font-weight: 600;
           color: #000;
           font-size: 11px;
           margin-left: 15px;
         }
         .myImg{
             width:32px;
             height: 33px;
             margin-top: 0;
             border-radius: 10px;
         }
     }
 }
}
`;