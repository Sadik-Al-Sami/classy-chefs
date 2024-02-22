import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Scroll from '../../utils/Scroll';

const Bookmarks = () => {
  const bookmarkData = useLoaderData();
  console.log(bookmarkData);
  return (
    <div className='bg-base-200'>
      <Scroll />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center container mx-auto'>
        {bookmarkData.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
