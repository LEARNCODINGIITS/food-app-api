import '../components/MealInfo.css';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import Header from './Header';

const MealInfo = () => {
  const [mydata,setData]=useState([])
   const {idMeal} = useParams();
   console.log(idMeal);

   const getInfo= async ()=>{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const r = await get.json();
      console.log(r.meals[0]);
      setData(r.meals[0]);
   }
   useEffect(()=>{
      getInfo();
   },[])

      return(
        <div>
          {
            !mydata?"":
            <div className="container mt-5">
               <div className="row">
                <div className="col-md-12">
                  <Header info={mydata.strMeal}/>
                </div>
               </div>
                <div className="row">
                  <div className="col-md-6">
                    
                    <figure class="figure">
                    <img src={mydata.strMealThumb} className="figure-img img-fluid rounded i"  alt="A generic square placeholder image with rounded corners in a figure."/>
                    <figcaption class="figure-caption">{mydata.strMeal}.</figcaption>
                  </figure>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-primary text-white">
                            <div className="card-header text-warning h1">
                            {mydata.strCategory}
                            </div>
                            <div className="card-body">
                              <h5 className="card-title text-warning h2">{mydata.strMeal}</h5>
                              <figure>
                                      <blockquote class="blockquote">
                                      <p className="card-text text-white p-2 text-left">{mydata.strInstructions}</p>
                                      </blockquote>
                                      <figcaption class="blockquote-footer">
                                        <span className="text-white">Nice:</span> <cite title="Source Title" className="text-white">{mydata.strMeal}</cite>
                                      </figcaption>
                                    </figure>
                          
                              
                            </div>
                          </div>
                                

                  </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <NavLink to={`/`}><button className="btn btn-info">GO Back</button></NavLink>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <hr/>
                    <Header/>
                  </div>
                </div>
            </div>     
          
          }   
        </div>
      )
}

export default MealInfo;