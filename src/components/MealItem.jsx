import React from 'react'

function MealItem({ meal }) {
  return (

    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
        <div>
          <h3>{meal.name}</h3>
          <p className='meal-item-price'>{meal.price}</p>
          <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-actions'>
          <button>Add To Cart</button>
        </p>
      </article>

    </li>
  )
}

export default MealItem
