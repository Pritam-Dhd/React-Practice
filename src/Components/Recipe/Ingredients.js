import React from 'react'

const Ingredients = ({items}) => {
  return (
    <>
    <div className="ingredients">
                      <h5>Ingredients:</h5>
                      <ul>
                        {Object.entries(items[0])
                          .filter(([key, value]) =>
                            key.startsWith("strIngredient") && value
                          )
                          .map(([key, value]) => (
                            <li key={key} className='text-capitalize overflow-auto item'>
                              {value} - {items[0][`strMeasure${key.slice(13)}`]}
                            </li>
                          ))}
                      </ul>
                    </div>
    </>
  )
}

export default Ingredients