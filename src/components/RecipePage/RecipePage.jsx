import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipePage = () => {
  const recipeData = useLoaderData();
  const { chef_id, id, photo, name, instructions, ingredients } = recipeData;
  console.log(recipeData);
  return (
    <div className='bg-base-200'>
      <div className='container bg-base-300 rounded-xl shadow-md mx-auto p-10 font-poppins'>
        <h1 className='mt-20 text-center text-4xl'>{name}</h1>
        <div className='grid md:grid-cols-2'>
          {/* Details */}
          <div className='row-span-4 mt-20'>
            {/* Chef Details */}
            <div className='flex flex-col text-lg'>
              <p>Chef ID: {chef_id}</p>
              <p>Recipe Number: {id}</p>
            </div>
            {/* Recipe Details */}
            <div className='mt-4'>
              <h3 className='text-xl font-bold tracking-wide'>Ingredients</h3>
              <ul>
                {ingredients.map((value, index) => (
                  <li
                    className='pl-4 text-lg'
                    key={index}>
                    {value}
                  </li>
                ))}
              </ul>
              <div>
                <h2 className='text-xl mt-4 font-bold tracking-wide'>Instructions :</h2>
                <p>{instructions}</p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className='row-span-8 mt-20'>
            <img
              className='rounded-lg'
              src={photo}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
