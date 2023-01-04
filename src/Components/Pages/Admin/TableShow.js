import React from 'react';
import { Link } from 'react-router-dom';
import useTable from '../../../Hooks/UseTable';
import deleteIcon from "../../../Images/delete.png"
const TableShow = () => {
     const {tableBooking,handleBookingDelete}=useTable();
     return (
          <div className='container-fluid'>
          <table class="table table-hover">
     <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">bookingDate</th>
      <th scope="col">bookingTime</th>
      <th scope="col">peopleCount</th>
      <th scope="col">phone</th>
      <th scope="col">addresse</th>
      <th scope="col">people</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
     {    tableBooking.map((meal,index)=>
          <tr>
      <th scope="row">{index+1}</th>
      <td>{meal.name}</td>
      <td>{meal.email}</td>
      <td>{meal.bookingDate}</td>
      <td>{meal.bookingTime}</td>
      <td>{meal.peopleCount}</td>
      <td>{meal.phone}</td>
      <td>{meal.addresse}</td>
      <td>{meal.people}</td>
      <td> 
          {/* <Link className='me-2 text-decoration-none rounded-pil' >update</Link> */}
        
          
          <button onClick={()=>handleBookingDelete(meal._id)}><img style={{height:"30px",width:"auto"}} className='img-fluid' src={deleteIcon} alt="" /></button></td>
          
    </tr>
    )
     }
    
  </tbody>
</table>
          </div>
     );
};
export default TableShow;