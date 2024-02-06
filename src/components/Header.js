import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <Link to='/'>
        <img
          className="logo"
          src={LOGO}
        ></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to='/home' className="nav-item">Home</Link>
          <Link className="nav-item" to='/aboutus'>About us</Link>
          <li className="nav-item">
            <button className="login-btn" onClick={()=>{
              loginBtn === 'Login'? setLoginBtn('Logout') : setLoginBtn('Login')
            }}>{loginBtn}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
