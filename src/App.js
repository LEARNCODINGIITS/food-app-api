import './App.css';
import HomePage from './components/HomePage';
import {Routes,Route} from 'react-router-dom';
import MealInfo from './components/MealInfo';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/:idMeal" element={<MealInfo/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
