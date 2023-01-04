import React from 'react';
import { Link } from 'react-router-dom';
const WhyChooesUs = () => {
     return (
          <>
          <h1 className=' my-5 text-center fw-bold'><u>WHY CHOOSE US?</u></h1>
                <div class="row g-2 g-lg-3 align-items-center">
                <div className="col-md-6"><img className='img-fluid' src="https://i.ibb.co/8DLYrzR/delicious-fried-chicken-plate-144627-27383-1.png" alt="" /></div>
            <div className="col-md-6">
              <h1 className='fw-bold'>Best Food In The Country</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa adipisci ullam tempora nulla aliquam deleniti quo quia ex veritatis. Rerum repudiandae at rem non possimus aliquam accusantium, mollitia pariatur?</p>
              <div className="row g-4">
               <div className="col-4"><button className='btn btn-light border border-1 border-dark px-4'>Best Food</button></div>
               <div className="col-4"><button className='btn btn-light border border-1 px-4 border-dark'>Easy Payments</button></div>
               <div className="col-4"><button className='btn btn-light border border-1 px-4 border-dark'>24/7 Service</button></div>
              </div>
              <div class="d-grid gap-2">
              <Link className='btn btn-dark mt-3 px-4 text-center fw-semibold' to="/table-booking">table booking</Link>
</div>
            </div>
        
          </div> 
          </>
     );
};
export default WhyChooesUs;