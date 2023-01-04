import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useMealHooks from '../../../Hooks/useMealHooks';
import Location from '../../Location';
import SingleItems from '../../SingleItems';
import SocialLogin from '../../SocialLogin';
import TableBooking from '../../TableBooking';
import TotalItems from '../../TotalItems';
import WhyChooesUs from '../../WhyChooesUs';
import Contact from '../Contact';
const Home = () => {
     const {meals}=useMealHooks();
     return (
      <>
      <div className='container-fluid my-5 mb-5' >
          <div class="row g-5 g-lg-2 align-items-center py-4">
            <div className="col-md-6">
              <h5 className="text-dark">Our Special Dish</h5>
              <h1 className='fw-bold'>World best food <br/> collection in our resturent</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa adipisci ullam tempora nulla aliquam deleniti quo quia ex veritatis. Rerum repudiandae at rem non possimus aliquam accusantium, mollitia pariatur?</p>
              <button className='btn btn-dark fw-semibold'>Bookin a table</button>
              <button className='btn btn-dark fw-semibold ms-4'>Watch video</button>
            </div>
            <div className="col-md-6"><img className='img-fluid ' src="https://i.ibb.co/mDyty48/toast-egg-bacon-tomatoes-microgreens-salad-2829-4806-removebg-preview-1.png" alt="" /></div>
          </div>
{/* <Link className='btn btn-dark px-5' to="/all-items">More Items</Link> */}


    </div>
    <div className='bg-light py-5'>
      <div className='text-center my-3'>
      <h4 className='text-white '><span className='bg-dark px-4 py-1 rounded'>Our Menu</span></h4>
      <h1 className='fw-bold mb-5'><u>TODAY'S SPECIALITY</u></h1>
      {/* POPULAR DISHES */}
      </div>
      {/* <SingleItems/> */}
      {/* <TotalItems/> */}
      <div className='row row-cols-1 row-cols-md-4 g-4'>
          {
               meals.map((item,index)=> index<8 &&(<SingleItems
               item={item}
               key={item.idMeal}
               />))
          }
          </div>
          <div className="text-center mt-5"><Link className='btn btn-dark mt-3 px-5  fw-semibold' to="/all-items">Load More</Link></div>
    </div>
      <WhyChooesUs/>
      <div className='bg-light py-3'>
      <Contact/>
      </div>
      </>
     );
};

export default Home;