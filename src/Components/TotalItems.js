import React from 'react';
import useMealHooks from '../Hooks/useMealHooks';
import "./TotalItems.css"
// import banner from "../images/totalItemsBanner.jpg"
import SingleItems from './SingleItems';
const TotalItems = () => {
     const {meals}=useMealHooks();
          return (
               <div className='container-fluid'>
                    {/* <div>
                    <img className='img-fluid banner' src={banner} alt="total-Items-Banner" border="0"/>
                        
                    </div> */}
               <div className='text-center'>     
               <h2 className='fw-bold my-5'>Total <span className='text-dark'>Meals:</span> <span class="badge text-warning bg-dark ms-2 px-3 ">{meals.length}</span></h2>
              <div>
              {/* <form className='d-flex text-center justify-content-center mb-5'>
          <input type="search" name="searchText" placeholder="Search for a item..." className='inputFild'/>
          <select class="form-select" aria-label="Default select example"><option selected>All</option>
                    <option>Beef</option>
                    <option>Breakfast</option>
                    <option>Pasta</option>
                    <option>Seafood</option>
                    <option>Vegetarian</option>
                    <option>Goat</option>
               </select>
              
        </form> */}
              
              </div>             
               </div>
     <div className='row row-cols-1 row-cols-md-4 g-4'>
               {
                    meals.map(item=><SingleItems
                    item={item}
                    key={item.idMeal}
                    />)
               }
               </div>
               </div>
          );
};

export default TotalItems;