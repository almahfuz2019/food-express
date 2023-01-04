import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
     const [user]=useAuthState(auth);
  const [signInWithGoogle,  loading, error] = useSignInWithGoogle(auth); 
     return (
          <div>
               
          </div>
     );
};

export default SocialLogin;