import React from 'react'
import style from "../style/style.css"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">
    <h2>CyberSoft Movie</h2>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Movie <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Show Time</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Connect</a>
      </li>
     
    </ul>
    <div className="ml-auto">
      <button className="btn btn-outline-info my-2 my-sm-0 mr-2" type="sumit">
        Register
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0">Login</button>
    </div>
  </div>
</nav>

  )
}





