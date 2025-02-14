import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav-overlay"></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" style={{color:"red"}} >Service 1</a></li>
              <li><a class="dropdown-item" href="#">Service 2</a></li>
              <li>
                <a class="dropdown-item" href="#">Service 3</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
  )
}

export default NavBar