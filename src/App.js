
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/foods' element={<Meals></Meals>}></Route>
        <Route path='/Meal/:mealId' element={<MealDetails></MealDetails>}></Route>
      </Routes>

    </div>
  );
}

export default App;
