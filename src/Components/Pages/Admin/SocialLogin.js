import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
     const [user]=useAuthState(auth);
             
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle,  loading, error] = useSignInWithGoogle(auth); 
  if(user){
     navigate(from, { replace: true });
  }
  let errorElement;    
  if (error ) {      
       errorElement=  <div>
           <p className='text-danger'>Error: {error?.message} </p>
         </div>       
     }
     if (loading) {
          return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
          <div class="spinner-border p-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>;
        }

     return (
          <div>
               
          </div>
     );
};

export default SocialLogin;