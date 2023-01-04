import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
const RequireAuth = ({children}) => {
     const location=useLocation();
     const [user,loading]=useAuthState(auth);
     if (loading) {
          return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
          <div class="spinner-border p-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>;
        }
     if (!user) {
          return <Navigate to="/social-login" state={{ from: location }} replace />;
        }
      
        return children;
};
export default RequireAuth;