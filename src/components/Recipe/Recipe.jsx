import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const { chef_id, id, photo, ingredients, instructions } = recipe;
  return (
    <div className='card w-96 bg-base-100 shadow-xl mt-24 font-poppins'>
      <figure>
        <img
          src={photo}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <Link to={`/recipe/${id}`}>
            <button className='btn btn-primary'>View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
