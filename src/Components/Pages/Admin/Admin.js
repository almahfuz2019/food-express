import React from 'react';
import {useAuthState, useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./css/Admin.css";
import googleIcon from "../../../Images/googleICon.png"
import auth from '../../../firebase.init';

const Admin = () => {
  const [user]=useAuthState(auth);
  const [signInWithGoogle,  loading, error] = useSignInWithGoogle(auth); 
  const [signOut, gloading, gerror] = useSignOut(auth);
  let errorElement;    
  if (error ) {      
       errorElement=  <div>
           <p className='text-danger'>Error: {error?.message} </p>
         </div>       
     }
     const navigate=useNavigate();
     let gerrorElement;    
     if (gerror ) {      
          gerrorElement=  <div>
              <p className='text-danger'>Error: {error?.message} </p>
            </div>       
        }
        // if(signOut){
        //   navigate("/");
        // }
        if (gloading) {
          return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
          <div class="spinner-border p-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>;
        }
     
    //  if (loading) {
    //    return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
    //    <div class="spinner-border p-5" role="status">
    //      <span class="visually-hidden">Loading...</span>
    //    </div>
    //  </div>;
    //  }
  // const userEmail="mahfuzahmad342@gmail.com"
  // console.log(user.uid);
     return (
          <>
          {
              user?.uid==="oo47ld1iWYg4c2eGakvspw20LPg2"?
              <div>
              
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
        </button>
        <Link
          class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          to="/"
          >FOOD CORNER</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNavBar">
          <form class="d-flex ms-auto my-3 my-lg-0">
            <div class="input-group">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle ms-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-fill"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><button  class="dropdown-item" onClick={async () => {
          const success = await signOut();
          if (success) {
            alert('You are sign out');
          }
        }}>Log Out</button></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-start sidebar-nav bg-dark"
      tabindex="-1"
      id="sidebar"
    >
      <div class="offcanvas-body p-0">
        <nav class="navbar-dark">
          <ul class="navbar-nav">
            
            <li>
              <Link to="#" class="nav-link px-3 active">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                <span>Dashboard</span>
              </Link>
            </li>
           
            
            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#class"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Meal Items</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="class">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="create-meal" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Create Item</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="manage-meal" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Manage Items</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>


            
            <li>
              <a
                class="nav-link px-3 sidebar-link"
                data-bs-toggle="collapse"
                href="#subjects"
              >
                <span class="me-2"><i class="bi bi-layout-split"></i></span>
                <span>Table Booking</span>
                <span class="ms-auto">
                  <span class="right-icon">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </span>
              </a>
              <div class="collapse" id="subjects">
                <ul class="navbar-nav ps-3">
                  <li>
                    <Link to="table" class="nav-link px-3">
                      <span class="me-2"
                        ><i class="bi bi-speedometer2"></i
                      ></span>
                      <span>Table</span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </li>           
          </ul>
        </nav>
      </div>
    </div>
    {/* <!-- offcanvas --> */}
    <main class="mt-5 pt-3">
      <div class="container-fluid">
        <Outlet/>
      </div>
    </main> 
    </div>
    :
    <div className='text-center mx-auto ' style={{margin:"25%"}}>
                <button onClick={()=>signInWithGoogle()} className='btn btn-primary  '><img className='bg-light rounded' src={googleIcon}style={{height:"30px"}} alt="" /> google sing in</button>
                {errorElement}
          </div>

            
          }  
          </>
     );
};

export default Admin;