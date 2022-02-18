import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100vh;
  background: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
;
.welcome{
  width: 400px;
  height: 150px;
  padding: 20px 15px;
  background:linear-gradient(140deg, #45A5FF,#FAFAFA,blue);
  border-radius:10px;
}
.welcome h2{
  display: block;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Poppins';
}
.welcome button{
  padding: 15px;
  color: black;
  font-weight: 600;
  border: none;
  background-color: none;
}
form{
  display: block;
  position: relative;
}
form::after{
  position: absolute;
  content: '';
  display: block;
  top:-5px;
  left:-5px;
  right:-5px;
  bottom: -5px;
  z-index:1;
  background-color: grey;
  
}
form .form-inner{
  position: relative;
  display: block;
  padding: 30px;
  z-index: 2;
}
form .form-inner h2{
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 30px;
}
form .form-inner .form-group{
  display: block;
  width: 300px;
  margin-bottom: 15px;
}
form .form-inner .form-group label{
  display: block;
  color: white;
  font-size: 20px;
  margin-bottom: 6px;
  transition:0.5s;
}
form .form-inner .form-group:focus-within label{
  color: darkviolet;
}
form .form-inner .form-group input{
  display: block;
  width:100%;
  padding:10px 15px;
  border:none;
  border-radius: 5px;
}
form .form-inner .btn{
  display: block;
  width: 100px;
  padding: 15px;
  border:none;
  color: white;
  background-color:red;
  border:1px solid white;
  /* border-radius: 10px; */
}
`;

export const LoginContainer = styled.div`
  width: 82%;
  height: fit-content;
  margin-left:225px;
  background-color: rgba(0,0,0,0.3);
  `;

export const AppLogin = styled.div`
.btn-log{
  width:120px;
  height: 50px;
display: flex;

  justify-content:space-between;
  padding:10px;
  border-radius: 10px;
  border:1px solid #45A5FF;
  cursor:pointer;
  position: fixed;
  margin-top: -70px;
  margin-left: 20px;
}
.btn-log img{
  width:25px;
  height: 25px;
  position:fixed;
}
.btn-log button{
  border:none;
  border-radius: 10px;
  padding:10px;
  color: #45A5FF;
  background-color: #fff;
  margin-left: 40px;
  position:fixed;
}
  `;