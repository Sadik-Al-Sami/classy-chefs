import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Scroll from '../../utils/Scroll';
import { BsBookmarkXFill } from 'react-icons/bs';

const Bookmarks = () => {
  const bookmarkData = useLoaderData();
  return (
    <div className='bg-base-200'>
      <Scroll />
      {bookmarkData.length == 0 ? (
        <div className='h-[70vh]'>
          <h1 className='text-center pt-36 font-poppins font-semibold text-2xl'>
            No Bookmarks !!
          </h1>
          <div className='flex justify-center items-center'>
            <BsBookmarkXFill className='w-60 h-60 mt-20' />
          </div>
        </div>
      ) : (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center container mx-auto py-16'>
          {bookmarkData.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}></Recipe>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
