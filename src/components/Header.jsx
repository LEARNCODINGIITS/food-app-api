import React from 'react'

const Header = ({meal}) => {
    
  return (
    <div>
        <nav class="navbar navbar-dark bg-info text-white mt-10 p-2">
             <h1> {meal}</h1>
      </nav>
      <hr/>
      </div>
  )
}

export default Header