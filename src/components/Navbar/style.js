import styled from "styled-components";

export const NavbarWrapper = styled.div`
 width: 16.5%;
 height:100vh;
 background-color: #fff;
 position: fixed;
 .navbar-logo{
     padding:13px;
     p{
         color: #45A5FF;
         font-family: 'Poppins';
         font-weight: 600;
         font-size: 25px;
         margin-left: 20px;
     }
 }
 .nav-navbar{
     padding:10px;
     width: 220px;  
     height:100vh;
     .nav{
         list-style: none;
         width: 200px;
         margin: 12px -2px;
             .link{
                 display: flex;
                 text-decoration:none;
                 padding: 10px;
                 img{
                     width:24px;
                     margin-left: 5px;
                     filter: invert(70%) sepia(1%) saturate(2094%) hue-rotate(180deg) brightness(100%) contrast(66%);
                 }
              
                 p{
                    color: #9DA2A8;
                    margin-left: 14px;
                    margin-top: 4px;
                    font-weight: bold;
                    font-family: 'Poppins',sans-serif;
                 }
         
             }
     
         
     
     }
 }
`;

export const LiBox = styled.li`
   margin-bottom:20px;
   background-color: ${({ active }) => active ? "#EEF7FF" : "transparent"};
`;