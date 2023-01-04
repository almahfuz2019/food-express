import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemsDetails = () => {
     const {id}=useParams();
     const [meal,setMeal]=useState({});
    //  console.log(id);
     useEffect(()=>{
          const url=`http://localhost:5000/items/${id}`;
          // console.log(url)
          fetch(url)
          .then(res=>res.json())
          .then(data=>setMeal(data))
          // .then(data=>console.log(data))
          // console.log(meal);
     },[]);
     return (
          <div className='container'>
                 <h1>{meal.items}</h1>
              <div class=" my-5 shadow-lg p-3 mb-5 rounded" >
  <div class="row">
    <div class="col-md-6 text-center ">
      <img src={meal.strMealThumb} class="img-fluid h-100 rounded-start " alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h2 class="card-title fw-bold mt-4">{meal.strMeal}</h2>
        <hr />
        <p>Category: {meal.strCategory} || Area: {meal.strArea} || ID:{meal.idMeal}</p>
      
       
        <p class="card-text">Description: {meal.strInstructions}</p>
     
  <span>Video link: </span><a href={meal.strYoutube}>{meal.strYoutube}</a>


 
      </div>
    </div>
  </div>
</div>

          </div>
     );
};

export default ItemsDetails;