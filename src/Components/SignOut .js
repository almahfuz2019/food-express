import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import googleIcon from "../Images/googleICon.png"

const SignOutw = () => {
  const [signOut, loading, error] = useSignOut(auth);

  const navigate=useNavigate();
     let errorElement;    
     if (error) {      
          errorElement=  <div>
              <p className='text-danger'>Error: {error?.message} </p>
            </div>       
        }
        // if(signOut){
        //   navigate("/");
        // }
        if (loading) {
          return<div class="d-flex justify-content-center " style={{marginTop:"20%"}}>
          <div class="spinner-border p-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>;
        }
  return (
    <div className="App">
      <div className='text-center mx-auto ' style={{margin:"25%"}}>
       
      <button className='btn btn-primary  '
        onClick={async () => {
          const success = await signOut();
          if (success) {
            alert('You are sign out');
          }
        }}
        >
       <img className='bg-light rounded' src={googleIcon}style={{height:"30px"}} alt="" /> Sign out
      </button>
      {errorElement}
        </div>
    </div>
  );
};
export default SignOutw;