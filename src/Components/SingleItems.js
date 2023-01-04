import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const SingleItems = (props) => {
     const {strMeal,strInstructions,strMealThumb,idMeal,_id}=props.item;
     console.log(props);
    
     return (
          <div class="col">
    <div class=" shadow-lg rounded p-3 inner h-100">
    <img className='img-fluid rounded' src={strMealThumb} alt="" />
      <div class="card-body">
        <h3 class="card-title fw-bold">{strMeal}</h3>
        <hr />
        <p>{strInstructions.slice(0,100)}...</p>
          {/* <button  className='btn btn-dark '></button> */}
          <Link className=' me-5 text-decoration-none rounded-pil card-title fw-semibold btn btn-dark text-warning' to={`/items/${_id}`}>Details</Link>
      </div>
    </div>
  </div>

     );
};

export default SingleItems;