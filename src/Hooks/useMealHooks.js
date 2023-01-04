import React, { useEffect, useState } from 'react';
const useMealHooks = () => {
     const[meals,setMeals]=useState([]);
     useEffect(()=>{
          const url=`http://localhost:5000/items`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setMeals(data))
     },[]);
     const handleItemDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/item/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=meals.filter(singleStudent=>singleStudent._id !==id);
                         setMeals(remaining)
                    }
               })
          }
     }  
      return {meals,handleItemDelete}; 
};

export default useMealHooks;