import React from 'react';
const CreateMeal = () => {
     const handleMeal=(event)=>{
     event.preventDefault();
     const idMeal=event.target.idMeal.value;
     const strMeal=event.target.strMeal.value;
     const strCategory=event.target.strCategory.value;
     const strArea=event.target.strArea.value;
     const strInstructions=event.target.strInstructions.value;
     const strMealThumb=event.target.strMealThumb.value;
     const strYoutube=event.target.strYoutube.value;
     const classData={idMeal,strMeal,strCategory,strArea,strInstructions,strMealThumb,strYoutube};
     fetch('http://localhost:5000/item', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(classData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('Success:', data);
  alert("users added success"); 
    event.target.reset();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
     }
     return (
     <>
     <h2 className='fw-semibold text-center'>Add a meal item</h2>
     <form className='bg-light p-5 mt-' onSubmit={handleMeal}>
  <div class="mb-3">
    <input placeholder='Meal ID' type="text" name="idMeal" class="form-control mb-3" required/>
    <input placeholder='Meal Name' type="text" name="strMeal" class="form-control mb-3" required/>
    <input placeholder='Category' type="text" name="strCategory" class="form-control mb-3" required/>
    <input placeholder='Area' type="text" name="strArea" class="form-control mb-3" required/>
    <input placeholder='Image Link' type="text" name="strMealThumb" class="form-control mb-3" required/>
    <input placeholder='Youtube video link' type="text" name="strYoutube" class="form-control mb-3" required/>
    <textarea rows="5" placeholder='Description' type="text" name="strInstructions" class="form-control mb-3" required/>
  </div>
  <input type="submit" class="btn btn-primary" value="submit"/>
</form>   
          </>
     );
};
export default CreateMeal;