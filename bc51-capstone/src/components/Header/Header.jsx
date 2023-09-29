import React from 'react'
import style from "../style/style.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfoAction } from '../../store/actions/userAction'

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
      type="sumit"
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
      className=" ml-3 btn btn-warning">
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
      <a className="navbar-brand" href="#">
        <i className="fa-thin fa-dice-d20" />
        <h1>Cyber Cinema</h1>
      </a>
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
        <div classname="ml-auto">
          {renderContent()}
        </div>
      </div>
    </nav>
  </div>
</header>



















    

  )
}





//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light ">
//   <a className="navbar-brand" href="#">
//     <h2 className="text-white" >CyberSoft Movie</h2>
//   </a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon" />
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" href="#">Show Time</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" href="#">Service</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" href="#">Connect</NavLink>
//       </li>
     
//     </ul>
//     <div className="ml-auto">
//      {renderContent()}
//     </div>
//   </div>
// </nav>
//     </header>