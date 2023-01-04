import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useMealHooks from '../../Hooks/useMealHooks';
// import logo from "../../../Images/logo.png";
// import "./Navbar.css";
const Navbar = () => {
  
  const [user]=useAuthState(auth);
  const [signOut, gloading, gerror] = useSignOut(auth);
  const {meals}=useMealHooks();
     return (
          <nav class="navbar navbar-expand-lg bg-light text-dark">
          <div class="container-fluid">
            <Link class=" navbar-brand " to="/"><h3 className='fw-bold text-warning  p-1'>FOOD <span className='text-dark'>CORNER</span></h3></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active " aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active " to="/brand-story">Brand Story</Link>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle active" to="/product" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Meals
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/all-items">All Items<span class="badge bg-dark ms-2 text-warning">{meals.length}</span></Link></li>
                    
                    
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/contact">Contact</Link>
                </li>
              {
                user?  <li><button  class="dropdown-item" onClick={async () => {
                  const success = await signOut();
                  if (success) {
                    alert('You are sign out');
                  }
                }}>Log Out</button></li>:""
              }
                  
              </ul>             
            </div>
          </div>
        </nav>
     );
};
export default Navbar;