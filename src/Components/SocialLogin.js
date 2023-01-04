import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
// import googleIcon from "../Images/googleICon.png"

const SocialLogin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); 
     const navigate=useNavigate();
     let errorElement;    
     if (error ) {      
          errorElement=  <div>
              <p className='text-danger'>Error: {error?.message} </p>
            </div>       
        }
        if(user){
          navigate("/");
        }
        if (loading) {
          return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
          <div class="spinner-border p-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>;
        }
     return (
          <div className='text-center mx-auto'>
                <button onClick={()=>signInWithGoogle()} className='btn btn-primary'> google sing in</button>
                {errorElement}
          </div>
     );
};

export default SocialLogin;