import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipies = () => {
  const recipiesData = useLoaderData();
  console.log(recipiesData);
  return (
    <div className='bg-base-200'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center container mx-auto'>
        {recipiesData.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
