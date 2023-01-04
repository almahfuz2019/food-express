import React from 'react';
const Contact = () => {
     return (
          <div className='my-4 container'>
               <h1 className='text-center fw-bold my-4 text-dark'><u>Contact Us</u> </h1>
               <div className="row">
                    <div className="col-md-6 bg-dark p-5 text-white d-flex align-items-center">
                         <div>
                         <h4 className='fw-semibold'>Bashundhara Paper Mills Ltd (Unit-1)</h4>
                         <p>Meghnaghat, Baranagar, Sonargaon, Narayangonj <br />
Phone: +88 09612122234</p> <br />
<h4 className='fw-semibold'>Bashundhara Paper Mills Ltd (Unit-1)</h4>
                         <p>Meghnaghat, Baranagar, Sonargaon, Narayangonj <br />
Phone: +88 09612122234</p> <br />
                         </div>
                       
                    </div>
                    <div className="col-md-6 border border-5 border-dark p-5">
                    <div class="mb-3">

  <input type="text" class="form-control my-1"  placeholder="Name"/>
  <input type="email" class="form-control my-1"  placeholder="Email"/>
  <input type="text" class="form-control my-1"  placeholder="Phone"/>
  <input type="email" class="form-control my-1"  placeholder="subject"/>
</div>
<div class="my-1">
  <textarea placeholder='Type here' class="form-control" rows="5"></textarea>
</div>
<input class="btn btn-dark fw-semibold px-4 mt-1" type="submit" value="Submit"/>

                    </div>
                    
               </div>
               
          </div>
     );
};
export default Contact;