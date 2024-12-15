import React from 'react'
// import { Outlet } from 'react-router-dom';
import "./login.css";
import logo from "../../assets/images 1.png"
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import { NavLink } from 'react-router';

const Login = () => {
  return (
    <div className='main-cont-login'>
      <div className="main-login">
        <div className="content">
            <img src={logo} alt=""  />
            <h1>Login to your <br />account</h1>
            <p>Don’t have an account?<a href="">sign up</a></p>
        </div>
        <div className="inputs">
          <Input  type="text" placeholder="Email"/>
          <Input  type="password" placeholder="Password"/>
          <a>Forgot Password?</a>
          <NavLink to={'/Home'}>  
                   <Btn ClassCss = "btn-g" val="Login" />
          </NavLink>
          <p>Or login with</p>
        </div>
        <div className="otherLogin">
          <Btn ClassCss = "btn-gray" val="Google"/>
          <Btn ClassCss = "btn-gray" val="Facebook"/>
        </div>

      </div>
      <div className="footer-login"></div>
      {/* <Outlet /> */}
    </div>
  )
}

export default Login ;
