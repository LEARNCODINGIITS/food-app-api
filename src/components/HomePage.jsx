import React, { useState } from 'react'
import MealCard from './MealCard'

const HomePage = () => {

const [search,setSearch]=useState()
const [data,setData]=useState()

const searchHandle=(e)=>{
      setSearch(e.target.value);
}

/*{Featch Data from Fake API i.e. Meal API i.e TheMealDB} */
 const getMealData=async ()=> {
    const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
     const jsonData =await get.json()
     console.log(jsonData);
     setData(jsonData)
}
  return (
    <>
      <div className="container mt-5">
        <h2 className="bg bg-info">WELCOME TO FOOD APP</h2><hr/>
         <div className="row">
            <div className="col-md-12">
            <input className="form-control w-55 h-55" type="text" placeholder="ENTER DISHES" onChange={searchHandle}/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
             <div>
             <button className="btn btn-outline-primary w-25 rounded-left" onClick={getMealData}>SEARCH</button><br/>
             </div>
             <br/>
            </div>
           
         </div>
          <div className="row">
                 <MealCard details={data}/>
          </div>
      </div>


    </>
  )
}

export default HomePage