import React, { useState } from 'react'
import './App.css';
import MainPages from './MainPage';
import LoginForm from './components/loginForm/LoginForm';
import Logout from './assets/image/logout.png'
import { AppLogin } from './components/loginForm/style';

function App() {

  const adminUser = {
    email: "dalerisamitdinov@gmail.com",
    password: "matiz2005"
  }
  const [user, setUser] = useState({  email: "" });
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged in');
      setUser({
        
        email: details.email
      })
    } else {
      console.log("Details do not match");
      setError("Details do not match")
    }
  }
  const logout = () => {
    setUser({  email: "" })
  }
  return (
    <>
      {(user.email != "") ? (
        <div className="welcome">
          <MainPages />
          <AppLogin>
            <div className='btn-log'  onClick={logout}>
            <img src={Logout} />
            <button>Logout</button>

            </div>
          </AppLogin>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}

export default App;
