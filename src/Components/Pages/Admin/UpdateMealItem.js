import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const UpdateMealItem = () => {
    const [mealItem, setMealItem] = useState({});
    const [idMeal, setIdMeal] = useState({});
    const [strMeal, setStrMeal] = useState({});
    const [strCategory, setStrCategory] = useState({});
    const [strArea, setStrArea] = useState({});
    const [strMealThumb, setStrMealThumb] = useState({});
    const [strYoutube, setStrYoutube] = useState({});
    const [strInstructions, setStrInstructions] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMealItem(data));
          //   console.log(mealItem);
    }, []);
    // Update meal
    const handleIdMealChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { idMeal: updateIdMeal}
        setIdMeal(updateItem);
    }
    const handlestrMealChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strMeal: updateIdMeal}
        setStrMeal(updateItem);
    }
    const handlestrCategoryChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strCategory: updateIdMeal}
        setStrCategory(updateItem);
    }
    const handlestrAreaChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strArea: updateIdMeal}
        setStrArea(updateItem);
    }
    const handlestrMealThumbChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strMealThumb: updateIdMeal}
        setStrMealThumb(updateItem);
    }
    const handlestrYoutubeChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strYoutube: updateIdMeal}
        setStrYoutube(updateItem);
    }
    const handlestrInstructionsChange = e => {
        const updateIdMeal = e.target.value;
        const updateItem = { strInstructions: updateIdMeal}
        setStrInstructions(updateItem);
    }
    const handleUpdateMeal = e => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mealItem)
        })
            .then(res => res.json())
            .then(data => {
                
                    alert('Update Successful');
                    // setUser({});
                    e.target.reset();
                
            })
        e.preventDefault();
    }   
    return (
    <div>      

<Link to="/admin">back</Link>
<form onSubmit={handleUpdateMeal} className="mt-5">
<input placeholder='Meal Id' value={mealItem.idMeal} type="text" onChange={handleIdMealChange}  class="form-control mb-3"/> 
<input placeholder='Meal Name' value={mealItem.strMeal} type="text" onChange={handlestrMealChange}  class="form-control mb-3"/> 
<input placeholder='Category' value={mealItem.strCategory} type="text" onChange={handlestrCategoryChange}  class="form-control mb-3"/> 
<input placeholder='Area' value={mealItem.strArea} type="text" onChange={handlestrAreaChange}  class="form-control mb-3"/> 
<input placeholder='Image Link' value={mealItem.strMealThumb} type="text" onChange={handlestrMealThumbChange}  class="form-control mb-3"/> 
<input placeholder='Youtube video link' value={mealItem.strYoutube} type="text" onChange={handlestrYoutubeChange}  class="form-control mb-3"/>  
 <textarea placeholder='description' class="form-control mb-3" type="text" onChange={handlestrInstructionsChange} value={mealItem.strInstructions}  rows="9"></textarea>
<input class="btn btn-primary" type="submit" value="save"/>


</form>       
    </div>
    );
};
export default UpdateMealItem;