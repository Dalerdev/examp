import styled from "styled-components";

export const TitleProduct = styled.div`
width:fit-content;
padding:8px;
border:none;
color:black;
font-weight:bold;
/* border:1px solid grey; */
margin-left:15px;
`;
export const AddProductWrapper = styled.div`
  width:800px;
  height:550px;
  padding:10px;
  display:flex;
  /* background: linear-gradient(107.81deg, #0047FF -0.31%, #EC00E2 100%); */
`;

export const FormWrapper = styled.form`
  width: 620px;
  border-radius: 5px;
  padding: 10px;
  /* margin-left: -30px; */
  height:520px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

`;
export const Input = styled.input`
  width: 270px;
  height:50px;
  padding: 10px;
  margin: 10px 0;
  border-radius:10px;
  border:1px solid silver;
`;
export const UploadImage = styled.div`
border:1px solid black;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height:100px;
  padding: 10px;
  /* margin: 10px 0; */
  border-radius:5px;
  border:1px solid silver;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top:-10px;
  border:1px solid silver;
  border-radius:10px;
  background-color: red;
   h4{
     color:white;
     font-weight:bold;
     font-family:'PT',sans-serif;
   }

`;

export const Label = styled.label`
  /* background-color: #0e1538; */
  padding: 20px;
  display:flex;
  border-radius: 10px;
  input{
   display: none;
   padding: 10px;
   border:none;
   }

   .txt{
     width:340px;
     height:fit-content;
     padding:10px;
     line-height:23px;
     h3{
       font-size:17px;
       color:black;
       font-family:'Poppins',sans-serif;
     }
     p{
       font-size:12px;
       color:black;
       font-weight:bold;
       span{
         color:green;
         border-bottom:1px solid green;
         font-weight:bold;
       }
     }
   }
   img{
     width:140px;
     height:140px;
     width: fit-content;
     display: block;
     margin: auto;
   }
   .img{
     width:25%;
   }
`;
export const InputWrapper=styled.div`
  width:600px;
  height:170px;
  padding:5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
