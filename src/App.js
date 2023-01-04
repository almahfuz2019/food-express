
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shired/navbar';
import Home from './Components/Pages/Home/Home';
import BrandStory from './Components/Pages/BrandStory';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Shired/Footer';
import TotalItems from './Components/TotalItems';
import ItemsDetails from './Components/ItemsDetails';
import TableBooking from './Components/TableBooking';
import Admin from './Components/Pages/Admin/Admin';
import ManageMeal from './Components/Pages/Admin/ManageMeal';
import CreateMeal from './Components/Pages/Admin/CreateMeal';
import UpdateMealItem from './Components/Pages/Admin/UpdateMealItem';
import SignOut from './Components/SignOut ';
import TableShow from './Components/Pages/Admin/TableShow';

function App() {
  return (
    <>
    <Navbar/>
    {/* <TotalItems/> */}
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/brand-story" element={<BrandStory/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/all-items" element={<TotalItems/>}/>
        <Route path='/items/:id' element={<ItemsDetails/>}/>
        <Route path='/table-booking' element={<TableBooking/>}/>
        <Route path='/logout' element={<SignOut/>}/>
        <Route path='/admin/' element={<Admin/>}>
          <Route path='manage-meal' element={<ManageMeal/>}/>
          <Route path='create-meal' element={<CreateMeal/>}/>
          <Route path='table' element={<TableShow/>}/>
        </Route>
          <Route path='/update/:id' element={<UpdateMealItem/>}/>
      
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
