import React from 'react'
import style from "../style/style.css"
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfoAction } from '../../store/actions/userAction'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const ditpatch = useDispatch();
const userState =  useSelector((state) => state.userReducer);
  const navigate = useNavigate();

 

const renderContent = ()=>{
  if(!userState.userInfo){
    return( 
    <div className='ml-login'>
     <button 
      className="btn btn-outline-light my-2 my-sm-0 mr-2 text-white" 
      //type="sumit"
      onClick={()=>navigate("/register")}
      >
        Register
      </button>
      <button 
      onClick={()=>navigate("/login")} 
      className="btn btn-outline-light my-2 my-sm-0 text-white">
        Login
      </button>
    
    </div>
    );
  } else {
    //ĐÃ ĐĂNG NHẬP
    return (
      <div className='login'>
      
      <span className='text-white'>Hello {userState.userInfo.hoTen}</span>

      <button 
      onClick={handleLogout} 
      className="btn btn-outline-light my-2 my-sm-0 text-white">
        LOGOUT
        </button>
      </div>
    )
  }
}

const handleLogout = ()=>{
  localStorage.removeItem("USER_INFO");
  ditpatch(setUserInfoAction(null))
  navigate("/")
}

  return (
  <header className="container">
  <div className="header__content">
    <nav className="navbar navbar-expand-md  navbar-dark">
      {/* Brand */}
      <NavLink className="navbar-brand" to="/">
        <h1>Cyber Cinema</h1>
      </NavLink>
      {/* Toggler/collapsibe Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <div  style={{marginRight:"10"}}>
          {renderContent()}
        </div>
      </div>
    </nav>
  </div>
</header>


  )
}





