import React, { useState } from 'react';
const TableBooking = () => {
  const[selectTable,setSelectTable]=useState();
     const handleAddTableBooking=(event)=>{
          event.preventDefault();
          const name=event.target.name.value;
          const email=event.target.email.value;
          const bookingDate=event.target.bookingDate.value;
          const bookingTime=event.target.bookingTime.value;
          const tableNo=selectTable;
          const phone=event.target.phone.value;
          const addresse=event.target.address.value;
          const people=event.target.people.value;
          // const useremail=user.email;
           const tableBookingData={name,email,bookingDate,bookingTime,tableNo,phone,addresse,people};
           fetch('http://localhost:5000/booking', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableBookingData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Success:', data);
          
        alert("your request submitted.Please wait for confirm email");
        
          event.target.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
           }
     return (
          <>
               <div className='row'>
                    <div className='col-md-6'>
<img className='img-fluid' src="https://i.ibb.co/thV9SgS/map-show-table-restaurant-vector-layout-map-show-table-restaurant-vector-173389315-1.jpg" alt="" />
                    </div>
                    <div className='col-md-6'>
           <h2 className='fw-semibold text-center'>Add student</h2>
     <form className='bg-light p-5 mt-5' onSubmit={handleAddTableBooking}>
    <input placeholder='name' type="text" name="name" class="form-control mb-3" />
    <input placeholder="email" type="text" name="email" class="form-control mb-3" />
    
    <input placeholder='Date (22-12-2022)' type="date" name="bookingDate" class="form-control mb-3" />
    <input placeholder='Time' type="time" name="bookingTime" class="form-control mb-3" />
    <select onChange={e=>setSelectTable(e.target.value)} class="form-select form-select mb-3" aria-label=".form-select-lg example">
  <option selected value="">Select table </option>
  <option >1</option>
  <option >2</option>
  <option >3</option>
  <option >4</option>
  <option >5</option>
  <option >6</option>
</select>
    <input placeholder='phone' type="text" name="phone" class="form-control mb-3" />
    <input placeholder="address" type="text" name="address" class="form-control mb-3" />
    <input placeholder='people' type="text" name="people" class="form-control mb-3" />
  <input type="submit" class="btn btn-primary" value="submit"/>
</form> 
          </div>

               </div>
          </>
     );
};
export default TableBooking;