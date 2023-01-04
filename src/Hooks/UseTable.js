import React, { useEffect, useState } from 'react';
const useTable = () => {
     const[tableBooking,setTableBooking]=useState([]);
     useEffect(()=>{
          const url=`http://localhost:5000/tables`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setTableBooking(data))
     },[]);
     const handleBookingDelete=id=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               console.log("deleting user with id",id);
               const url=`http://localhost:5000/booking/${id}`;
               fetch(url,{
                    method:'DELETE'
               })
               .then(res=>res.json())
               .then(data=>{
                    console.log("deleted",data);
                    if(data.deletedCount>0){
                         const remaining=tableBooking.filter(singleStudent=>singleStudent._id !==id);
                         setTableBooking(remaining)
                    }
               })
          }
     }  
      return {tableBooking,handleBookingDelete}; 
};

export default useTable;