import React from 'react';
import { Link } from 'react-router-dom';
import useMealHooks from '../../../Hooks/useMealHooks';
const ManageMeal = () => {
     const {meals,handleItemDelete}=useMealHooks();
     return (
          <div>
          <table class="table table-hover">
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Area</th>
      <th scope="col">Meal ID</th>
      <th scope="col">Class</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
     {    meals.map((meal,index)=>
          <tr>
      <th scope="row">{index+1}</th>
      <td>{meal.strMeal}</td>
      <td>{meal.strArea}</td>
      <td>{meal.idMeal}</td>
      <td>Active</td>
      <td> 
          {/* <Link className='me-2 text-decoration-none rounded-pil' >update</Link> */}
        
          <Link className=' me-1 text-decoration-none rounded-pil' to={`/update/${meal._id}`}> <img style={{height:"30px",width:"auto"}} className='img-fluid me-1' src="" alt="" />d</Link>
          <button onClick={()=>handleItemDelete(meal._id)}>d</button></td>
    </tr>
    )
     }
    
  </tbody>
</table>
          </div>
     );
};
export default ManageMeal;