import React from "react";
import '../components/MealCard.css';
import { NavLink } from "react-router-dom";
const MealCard = ({ details }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col md-6">
            {!details? "": details.meals.map((item,i)=>{
                return(
                    <div className="meals" key={i}>
                       <img src={item.strMealThumb} alt=""/>
                        <p> {item.strMeal}</p>
                        <NavLink to={`/${item.idMeal}`}><button className="btn btn-info">MORE INFO...</button></NavLink>
                       
                    </div>
                    
                )
              })
               
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCard;
